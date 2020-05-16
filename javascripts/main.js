import Controller from "./controller";
import Display from "./display/display";
import Engine from "./engine";
import Game from "./game/game";

const render = function() {
  display.renderColor("#000000");
  display.drawMap(game.world.map);

  // draw player
  const { posX: playerX, posY: playerY } = game.player.movement;
  display.drawSquare({x: playerX, y: playerY, width: game.player.width, height: game.player.height, color: "green" })
  display.drawObject(game.player.currentFrame, playerX + game.player.offsetX, playerY + game.player.offsetY);

  // draw enemies
  game.enemies.forEach(enemy => {
    display.drawSquare({ x: enemy.movement.posX, y: enemy.movement.posY, width: enemy.width, height: enemy.height, color: "green" })
    display.drawObject(
      enemy.currentFrame,
      enemy.movement.posX + enemy.offsetX,
      enemy.movement.posY + enemy.offsetY
    );
  })

  // temp bullets
  game.player.gun.bullets.forEach(bullet => {
    display.drawRotatedObject(
      bullet.currentFrame,
      bullet.movement.posX, bullet.movement.posY,
      bullet.angle
    );
  });

  game.enemies.forEach(enemy => {
    enemy.gun.bullets.forEach(bullet => {
      display.drawRotatedObject(bullet.currentFrame, bullet.movement.posX, bullet.movement.posY, bullet.angle);
    });
  })


  
  // ui
  display.drawHealth(game.world.width, game.world.height, game.player.health, game.player.maxHealth)
  
  display.render();
};

const update = function(timeStamp) {
  router();
  game.update(timeStamp);
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

display.tileSheet.image.addEventListener("load", () => {
  display.handleResize(
    document.documentElement.clientWidth - 32,
    document.documentElement.clientHeight - 32,
    game.world.height / game.world.width
  );
  engine.start();
});

display.tileSheet.loadImage();
