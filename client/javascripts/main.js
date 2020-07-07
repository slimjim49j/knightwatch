import Controller from "./controller";
import Display from "./controllers/display";
import Engine from "./engine";
import Game from "./game/game";
import Leaderboard from "./controllers/leaderboard";
import Sound from "./controllers/sound";

const render = function() {
  display.renderColor("#000000");
  display.drawMap(game.world.map);
  
  // draw enemies
  game.enemies.forEach(enemy => {
    if (enemy.active) {
      // display.drawSquare({ x: enemy.movement.posX, y: enemy.movement.posY, width: enemy.width, height: enemy.height, color: "pink" })
      display.drawObject(
        enemy.currentFrame,
        enemy.movement.posX + enemy.offsetX,
        enemy.movement.posY + enemy.offsetY
      );
    } else {
      display.drawRotatedObject(
        enemy.currentFrame,
        enemy.movement.posX,
        enemy.movement.posY,
        60
      );
      // display.drawSquare({ x: enemy.movement.posX, y: enemy.movement.posY, width: enemy.width, height: enemy.height, color: "#00000099" });
    }
  });
    
  // draw player
  const { posX: playerX, posY: playerY } = game.player.movement;
  // display.drawSquare({x: playerX, y: playerY, width: game.player.width, height: game.player.height, color: "pink" });
  display.drawObject(game.player.currentFrame, playerX + game.player.offsetX, playerY + game.player.offsetY);

  // temp bullets
  game.player.gun.bullets.forEach(bullet => {
    // display.drawSquare({ x: bullet.movement.posX, y: bullet.movement.posY, width: bullet.width, height: bullet.height, color: "pink" })
    display.drawRotatedObject(
      bullet.currentFrame,
      bullet.movement.posX + bullet.offsetX,
      bullet.movement.posY + bullet.offsetY,
      bullet.angle
    );
  });

  game.enemies.forEach(enemy => {
    enemy.gun.bullets.forEach(bullet => {
      // display.drawSquare({ x: bullet.movement.posX, y: bullet.movement.posY, width: bullet.width, height: bullet.height, color: "pink" })
      display.drawRotatedObject(bullet.currentFrame,
        bullet.movement.posX + bullet.offsetX,
        bullet.movement.posY + bullet.offsetY,
        bullet.angle
      );
    });
  })

  // top of map
  display.drawMap(game.world.topMap);

  // shadow
  display.drawRadialGradient({
    innerX: playerX,
    innerY: playerY,
    innerR: 15,
    outerX: playerX,
    outerY: playerY,
    outerR: 500
  });
  
  // ui
  display.drawHealth(game.world.width, game.world.height, game.player.health, game.player.maxHealth);
  
  display.render();
};

const renderStartScreen = function() {
  display.renderColor("black");
  display.drawText({
    text: "KnightWatch",
    font: "30px Adventurer",
    offsetY: 0,
  });
  display.drawText({
    text: "click anywhere to begin",
    font: "15px Adventurer",
    color: "#ffffaa",
    offsetY: 30,
  });
  display.render();
}

const renderEndScreen = function() {
  window.setTimeout( () => {
    display.renderColor("#00000088");

      display.drawText({
        text: "Game Over",
        font: "30px Adventurer",
        offsetY: 0,
      });
      display.drawText({
        text: `Score: ${game.score}`,
        font: "15px Adventurer",
        color: "#ffffaa",
        offsetY: 30,
      });
      display.drawText({
        text: "Click Anywhere to Restart",
        font: "15px Adventurer",
        color: "#ffffaa",
        offsetY: 60,
      });
    display.render();
  }, 500);
};



// sound effects
function playSound() {
  if (!soundStatus) return;

  if (game.player.sound === "hurt") {
    sound.playerHurt();
    game.player.sound = "";
  }

  game.enemies.forEach(enemy => {
    if (enemy.sound === "hurt") {
      sound.enemyHurt();
      enemy.sound = "";
    }
  })
}



// update
const waveSpan = document.querySelector(".wave-span");
const scoreSpan = document.querySelector(".score-span");
const update = function(timeStamp) {
  router();
  game.update(timeStamp);

  waveSpan.textContent = `Wave: ${game.wave}`;
  scoreSpan.textContent = `Score: ${game.score}`;
  
  if (game.player.health === 0) endGame();
};

function router() {
  if (controller.keys.up.active) game.player.moveUp(0.5);
  if (controller.keys.right.active) game.player.moveRight(0.5);
  if (controller.keys.down.active) game.player.moveDown(0.5);
  if (controller.keys.left.active) game.player.moveLeft(0.5);
};



let controller = new Controller();
let display = new Display(document.querySelector("canvas"));
let engine = new Engine(1000 / 30, update, render, playSound);
let game = new Game(document.querySelector(".difficulty-select").value);
let leaderboard = new Leaderboard();
let sound = new Sound();

display.buffer.canvas.height = game.world.height;
display.buffer.canvas.width = game.world.width;

// leaderboard logic
function updateLeaderboard() {
  leaderboard.getScores()
    .then(() => display.updateLeaderboard(leaderboard.highscores));
}
updateLeaderboard();

// highscore modal
document.querySelector(".highscore-modal .exit-btn").addEventListener("click", display.toggleHighscoreModal);
document.querySelector(".highscore-modal .submit-btn").addEventListener("click", e => {
  const name = document.querySelector(".name-field").value;
  leaderboard.postScore({
    name,
    wave: game.wave,
    difficulty: game.difficulty,
    score: game.score
  }).then(() => display.updateLeaderboard(leaderboard.highscores));
  display.toggleHighscoreModal();
});



// Event Handling
function handleKeyChange(e) {
  if (e.keyCode >= 37 && e.keyCode <= 40) e.preventDefault();
  controller.handleKeyChange(e.type, e.keyCode);
};

function handleResize() {
  display.handleResize(
    document.documentElement.clientWidth - 32,
    document.documentElement.clientHeight - 32,
    game.world.height / game.world.width
  );
  display.render();
};

function handleClick(e) {
  const worldRatio = game.world.width / display.context.canvas.width;
  game.player.requestFire(e.offsetX * worldRatio, e.offsetY * worldRatio);
};

// music toggle
let musicStatus = true;
function handleMusicClick() {
  if (play) {
    const audioPlaying = sound.isPlayingMusic();
    musicStatus = !audioPlaying;
    if (audioPlaying) sound.pauseMusic();
    else sound.startMusic();
  } else {
    musicStatus = !musicStatus;
  }

  display.updateMusicToggle(musicStatus);
}

let soundStatus = true;
function handleSoundClick() {
  soundStatus = !soundStatus;
  display.updateSoundToggle(soundStatus);
}
display.updateSoundToggle(sound);
display.updateMusicToggle(musicStatus);

// leaderboard
document.querySelector(".leaderboard-radio-wrapper").addEventListener("change", () => {
  updateLeaderboard();
})

document.querySelector(".expand-button").addEventListener("click", () => {
  const arrowSpan = document.querySelector(".expand-button .arrow");
  const leaderboards = document.querySelectorAll(".leaderboard");
  arrowSpan.classList.toggle("arrow-up");
  arrowSpan.classList.toggle("arrow-down");
  leaderboards.forEach(leaderboard => leaderboard.classList.toggle("maximize"));
})

// difficulty dropdown
const difficultySelect = document.querySelector(".difficulty-select");
difficultySelect.addEventListener("change", () => {
  if (play) return;
  else game.difficulty = difficultySelect.value;
});

window.addEventListener("resize", handleResize);
window.addEventListener("keydown", handleKeyChange);
window.addEventListener("keyup", handleKeyChange);
window.addEventListener("click", handleClick);
document.querySelector(".music-toggle").addEventListener("click", handleMusicClick);
document.querySelector(".sound-toggle").addEventListener("click", handleSoundClick);



// handle start / stop game play

let imgLoaded = false;
display.tileSheet.image.addEventListener("load", () => {
  display.handleResize(
    document.documentElement.clientWidth - 32,
    document.documentElement.clientHeight - 32,
    game.world.height / game.world.width
  );
  imgLoaded = true;
  enableStart();
  // engine.start();
  // window.setTimeout(() => engine.stop(), 1000)
});

let play = false;
const playToggleCheckbox = document.querySelector(".play-toggle-label input");
playToggleCheckbox.addEventListener("change", togglePlay);

function togglePlay(e) {
  e.stopPropagation();
  if (game.player.health === 0) return;

  const playToggleSpan = document.querySelector(".play-toggle-label span");

  // play = !play;
  if (imgLoaded && !play) {

    resumeActivity();
    playToggleSpan.textContent = "Pause"
  } else {

    pauseActivity();
    playToggleSpan.textContent = "Play"
  }
}

// guns, bullets, enemy manager
function resumeActivity() {
  document.querySelector(".game-wrapper").scrollIntoView();
  engine.start();

  play = true;

  // resume bullet expiration
  game.player.gun.bullets.forEach(bullet => bullet.expirationTimer.resume());
  game.enemies.forEach(enemy => (
    enemy.gun.bullets.forEach(bullet => bullet.expirationTimer.resume())
  ));

  // resume gun cooldown
  if (game.player.gun.allowFire) game.player.gun.allowFire.resume();
  game.enemies.forEach(enemy => {
    if (enemy.gun.allowFire) enemy.gun.allowFire.resume();
  });
  
  // resume enemy manager
  if (game.interval) game.interval.resume();

  // sound
  if (musicStatus) sound.startMusic();
  display.updateMusicToggle(sound.isPlayingMusic());
}

function pauseActivity() {
  engine.stop();

  play = false;

  // pause bullet expiration
  game.player.gun.bullets.forEach(bullet => bullet.expirationTimer.pause());
  game.enemies.forEach(enemy => (
    enemy.gun.bullets.forEach(bullet => bullet.expirationTimer.pause())
  ));

  // pause gun cooldown
  if (game.player.gun.allowFire) game.player.gun.allowFire.pause();
  game.enemies.forEach(enemy => {
    if (enemy.gun.allowFire) enemy.gun.allowFire.pause();
  });

  // pause enemy manager
  game.interval.pause();

  // sound
  sound.pauseMusic();
}

function endGame() {
  if (leaderboard.isHighscore(game.difficulty, game.score)) display.toggleHighscoreModal();

  pauseActivity();
  renderEndScreen();

  const playToggleSpan = document.querySelector(".play-toggle-label span");
  playToggleSpan.textContent = "Start";
  
  window.setTimeout(enableRestart, 1000);
}

// restart
function enableRestart() {
  const main = document.querySelector("#main");
  main.addEventListener("click", function restart() {
    main.removeEventListener("click", restart);

    game = new Game(document.querySelector(".difficulty-select").value);
    display.setDifficultySelectStatus(true);
    enableStart();
  })
}


// click to start
function enableStart() {
  renderStartScreen();
  const main = document.querySelector("#main");
  main.addEventListener("click", function start(e) {
    main.removeEventListener("click", start);

    togglePlay(e);

    display.setDifficultySelectStatus(false);
  })
}

display.tileSheet.loadImage();
