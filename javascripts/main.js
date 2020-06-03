import Controller from "./controller";
import Display from "./display/display";
import Engine from "./engine";
import Game from "./game/game";

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

  
  // ui
  display.drawHealth(game.world.width, game.world.height, game.player.health, game.player.maxHealth)
  
  display.render();
};

const renderStartScreen = function() {
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

const difficultySpan = document.querySelector(".difficulty-span");
const scoreSpan = document.querySelector(".score-span");
const update = function(timeStamp) {
  router();
  game.update(timeStamp);

  difficultySpan.textContent = `Difficulty: ${game.difficulty}`;
  scoreSpan.textContent = `Score: ${game.score}`;
  
  if (game.player.health === 0) endGame();
};

const router = function() {
  if (controller.keys.up.active) game.player.moveUp(0.5);
  if (controller.keys.right.active) game.player.moveRight(0.5);
  if (controller.keys.down.active) game.player.moveDown(0.5);
  if (controller.keys.left.active) game.player.moveLeft(0.5);
};



const controller = new Controller();
const display = new Display(document.querySelector("canvas"));
const engine = new Engine(1000 / 30, update, render);
const game = new Game();

display.buffer.canvas.height = game.world.height;
display.buffer.canvas.width = game.world.width;



// Event Handling
const handleKeyChange = function(e) {
  controller.handleKeyChange(e.type, e.keyCode);
};

const handleResize = function() {
  display.handleResize(
    document.documentElement.clientWidth - 32,
    document.documentElement.clientHeight - 32,
    game.world.height / game.world.width
  );
  display.render();
};

const handleClick = function(e) {
  const worldRatio = game.world.width / display.context.canvas.width;
  game.player.requestFire(e.offsetX * worldRatio, e.offsetY * worldRatio);
};

window.addEventListener("resize", handleResize);
window.addEventListener("keydown", handleKeyChange);
window.addEventListener("keyup", handleKeyChange);
window.addEventListener("click", handleClick);



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
const playToggleSpan = document.querySelector(".play-toggle-label span");
playToggleCheckbox.addEventListener("change", togglePlay);

function togglePlay(e) {
  e.stopPropagation();
  if (game.player.health === 0) return;

  play = !play;
  if (imgLoaded && play) {

    resumeActivity();
    playToggleSpan.textContent = "Pause"
  } else {

    pauseActivity();
    playToggleSpan.textContent = "Play"
  }
}

// guns, bullets, enemy manager
function resumeActivity() {
  engine.start();

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
}

function pauseActivity() {
  engine.stop();

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
}

function endGame() {
  pauseActivity();
  renderEndScreen();
  window.setTimeout(enableRestart, 1000);
}

// restart
function enableRestart() {
  document.querySelector("#main").addEventListener("click", e => {
    location.reload();
  })
}


// click to start
function enableStart() {
  renderStartScreen();
  document.querySelector("#main").addEventListener("click", function start(e) {
    togglePlay(e);
    document.querySelector("#main").removeEventListener("click", start);
  })
}

display.tileSheet.loadImage();
