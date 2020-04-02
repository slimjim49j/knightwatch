import Entities from "./entities";
import Gun from "./gun";

class Player extends Entities {
  constructor(movement) {
    super(movement);
    this.gun = new Gun();
  }

  requestFire() {
    this.gun.fire({ 
      posX: this.movement.posX,
      posY: this.movement.posY,
      velX: 10,
      velY: 0,
    });
  }

  update(friction) {
    super.update(friction);
    this.gun.update();
  }
}

export default Player;
