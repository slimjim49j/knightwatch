import Entities from "./entities";
import Gun from "./gun";

class Player extends Entities {
  constructor(width, height, movement) {
    super(width, height, movement);
    this.gun = new Gun(5000, () => 300);
    this.health = 7;
  }

  requestFire(mouseX, mouseY) {
    const { posX: playerX, posY: playerY } = this.movement;
    const angle = Math.atan2(mouseY - playerY, mouseX - playerX);
    this.gun.fire({
      posX: playerX,
      posY: playerY,
      velX: 5 * Math.cos(angle),
      velY: 5 * Math.sin(angle),
    });
  }

  update(friction) {
    super.update(friction);
    this.gun.update();
  }



  moveUp(vel) {
    this.movement.velY -= vel;
  }

  moveRight(vel) {
    this.movement.velX += vel;
  }

  moveDown(vel) {
    this.movement.velY += vel;
  }

  moveLeft(vel) {
    this.movement.velX -= vel;
  }
}

export default Player;
