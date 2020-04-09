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

    this.bulletCollisionDetection = this.bulletCollisionDetection.bind(this);
  }

  update(timeStamp) {
    this.player.update(this.world.friction);
    this.enemies.forEach((enemy) =>
      enemy.update(
        this.world.friction,
        this.player.movement.posX,
        this.player.movement.posY
      )
    );
    this.bulletCollisionDetection();
  }

  bulletCollisionDetection() {
    this.enemies.forEach(enemy => {
      // player bullet collision
      enemy.gun.bullets.forEach(bullet => {
        if (bullet.isColliding(this.player)) {
          this.player.health -= bullet.damage;
        }
        console.log("player health:", this.player.health);
      }, this);

      // enemy bullet collision
      this.player.gun.bullets.forEach(bullet => {
        if (bullet.isColliding(enemy)) {
          enemy.health -= bullet.damage;
        }
        console.log("enemy health:", enemy.health);
      });
    }, this);
  }

  // addBullet(bullet) {}
}

export default Game;
