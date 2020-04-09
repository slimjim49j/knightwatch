import Entities from "./entities";
import Gun from "./gun";

class Enemy extends Entities {
  constructor(width, height, movement) {
    super(width, height, movement);
    this.gun = new Gun(1000, 10000);
    this.health = 5;
  }

  requestFire(targetX, targetY) {
    const { posX: enemyX, posY: enemyY } = this.movement;
    const angle = Math.atan2(targetY - enemyY, targetX - enemyX);
    this.gun.fire({
      posX: enemyX,
      posY: enemyY,
      velX: 5 * Math.cos(angle),
      velY: 5 * Math.sin(angle),
    });
  }

  update(friction, playerX, playerY) {
    super.update(friction);
    this.gun.update();
    this.requestFire(playerX, playerY);
    console.log(this.gun.bullets)
  }
}

export default Enemy;