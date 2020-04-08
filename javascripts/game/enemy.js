import Entities from "./entities";
import Gun from "./gun";

class Enemy extends Entities {
  constructor(width, height, movement) {
    super(width, height, movement);
    this.gun = new Gun(10000);
    this.requestFire(0, 0);
  }

  requestFire(mouseX, mouseY) {
    const { posX: enemyX, posY: enemyY } = this.movement;
    const angle = Math.atan2(mouseY - enemyY, mouseX - enemyX);
    this.gun.fire({
      posX: enemyX,
      posY: enemyY,
      velX: 0,
      velY: 0,
    });
  }

  update(friction) {
    super.update(friction);
    this.gun.update();
    console.log(this.gun.bullets)
  }
}

export default Enemy;
