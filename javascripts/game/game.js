import Enemy from "./enemy";
import Player from "./player";
import World from "./world";

class Game {
  constructor() {
    this.player = new Player(10, 10, {
      posX: 50,
      posY: 50,
      velX: 0,
      velY: 0,
    });

    this.bullets = [];
    this.enemies = [
      new Enemy(10, 10, { posX: 100, posY: 100, velX: 0, velY: 0 }),
    ];

    this.world = new World();

    this.playerCollisionDetection = this.playerCollisionDetection.bind(this);
  }

  update(timeStamp) {
    this.player.update(this.world.friction);
    this.enemies.forEach(enemy => enemy.update(this.world.friction));
    this.playerCollisionDetection();
  }

  playerCollisionDetection() {
    this.enemies.forEach(enemy => {
      // debugger
      enemy.gun.bullets.forEach(bullet => {
        // debugger
        if (bullet.isColliding(this.player)) {
          // debugger
          this.player.health -= bullet.damage;
        }
        console.log(this.player.health);
      }, this);
    }, this);
  }

  // addBullet(bullet) {}
}

export default Game;
