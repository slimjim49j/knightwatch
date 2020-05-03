import Entities from "./entities";
import FrameManager from "./frame_manager";

class Bullet extends Entities {
  constructor(width, height, expireTime, movement) {
    const animatorParams = setupAnimatorParams();
    super(width, height, movement, animatorParams);
    // this.spawnTime = spawnTime;
    // this.expirationTime = 5000;
    this.expired = false;
    window.setTimeout(() => (this.expired = true), expireTime);
    this.damage = 2;
  }

  update() {
    // debugger
    // console.log(this.movement)
    Entities.prototype.update.call(this, 1);
  }

  isExpired() {
    // return (currentTime - this.spawnTime) > this.expirationTime;
    return this.expired;
  }

  isColliding(object) {
    if (
      this.movement.posX > object.movement.posX &&
      this.movement.posX < object.movement.posX + object.width &&
      this.movement.posY > object.movement.posY &&
      this.movement.posY < object.movement.posY + object.height
    ) {
      this.expired = true;
      return true;
    }
    return false;
  }
}

function setupAnimatorParams() {
  const frameManager = new FrameManager();
  frameManager.setFrames("idle", [
    {
      x: 314,
      y: 124,
      width: 3,
      height: 3,
    }
  ]);

  return {
    frameManager,
    mode: "idle",
    loop: false,
    delay: null,
  };
}

export default Bullet;
