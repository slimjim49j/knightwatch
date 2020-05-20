import Entities from "./entities";
import FrameManager from "./frame_manager";
import { Timer } from "../util/timers";

class Bullet extends Entities {
  constructor(width, height, expireTime, movement, angle) {
    const animatorParams = setupAnimatorParams();
    super(width, height, movement, animatorParams);
    this.angle = angle;
    // this.spawnTime = spawnTime;
    // this.expirationTime = 5000;
    this.expired = false;
    this.expirationTimer = new Timer(() => (this.expired = true), expireTime);
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
      x: 293,
      y: 18,
      width: 6,
      height: 13,
    }
  ]);

  return {
    frameManager,
    mode: "idle",
    loop: false,
    delay: null,
    offsetX: -1,
    offsetY: -1,
  };
}

export default Bullet;
