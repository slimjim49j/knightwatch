import Entities from "./entities";
import Gun from "./gun";

class Player extends Entities {
  constructor(movement) {
    super(movement);
    this.gun = new Gun();
  }

  requestFire(mouseX, mouseY) {
    const {posX: playerX, posY: playerY } = this.movement;
    const angle = Math.atan((mouseY - playerY) / (mouseX - playerX))
    // debugger
    console.log(mouseX, mouseY, playerX, playerY);
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
}

export default Player;
