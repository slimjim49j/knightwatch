import Entities from "./entities";
import Gun from "./gun";

class Player extends Entities {
  constructor(movement) {
    super(movement);
    this.gun = new Gun();
  }

  requestFire() {
    this.gun.fire({ 
      posX: this.posX,
      posY: this.posY,
      velX: 1,
      velY: 0,
    });
  }

  update(friction) {
    super.update(friction);
    this.gun.update();
  }
}

export default Player;
