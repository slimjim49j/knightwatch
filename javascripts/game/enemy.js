import Entities from "./entities";
import Gun from "./gun";
import FrameManager from "./frame_manager";

class Enemy extends Entities {
  constructor(width, height, movement) {
    const animatorParams = setupAnimatorParams();
    super(width, height, movement, animatorParams);

    const calcFireInterval = () => Math.random() * 3000 + 500;
    this.gun = new Gun(10000, calcFireInterval);

    this.health = 5;
    this.despawn = false;
    this.active = true;
  }

  requestFire(targetX, targetY) {
    const { posX: enemyX, posY: enemyY } = this.movement;
    const angle = Math.atan2(targetY - enemyY, targetX - enemyX);
    this.gun.fire({
      posX: enemyX,
      posY: enemyY,
      velX: 5 * Math.cos(angle),
      velY: 5 * Math.sin(angle),
    }, angle);
  }

  update(friction, targetX, targetY) {
    if (this.health <= 0) this.active = false;
    if (this.active) {
      const { posX: enemyX, posY: enemyY } = this.movement;
      const angle = Math.atan2(targetY - enemyY, targetX - enemyX);
      this.movement.velX = 2 * Math.cos(angle);
      this.movement.velY = 2 * Math.sin(angle);

      // update position
      super.update(friction);

      // fire bullet at target
      this.requestFire(targetX, targetY);

      this.updateOrientation();
      this.updateAnimationMode();
    } else {
      // only actually despawn once all bullets have despawned
      if (this.gun.bullets.length === 0) this.handleDespawn();
    }

    // updates bullets
    this.gun.update();

    console.log(this.gun.bullets);
  }

  updateOrientation() {
    if (this.movement.velX > 0) this.orientation = "right";
    else if (this.movement.velX < 0) this.orientation = "left";
  }

  updateAnimationMode() {
    const speed = Math.abs(this.movement.velX);
    if (speed > 1 && this.mode === "idle") this.changeMode("run", true);
    else if (speed < 1 && this.mode === "run") this.changeMode("idle", true);
  }

  handleDespawn() {
    this.despawn = true;
  }
}

function setupAnimatorParams() {
    const frameManager = new FrameManager();
    frameManager.setFrames("idle", [
      {
        x: 368,
        y: 204,
        width: 16,
        height: 20,
      },
      {
        x: 384,
        y: 204,
        width: 16,
        height: 20,
      },
      {
        x: 400,
        y: 204,
        width: 16,
        height: 20,
      },
      {
        x: 416,
        y: 204,
        width: 16,
        height: 20,
      },
    ]);
    frameManager.setFrames("run", [
      {
        x: 432,
        y: 204,
        width: 16,
        height: 20,
      },
      {
        x: 448,
        y: 204,
        width: 16,
        height: 20,
      },
      {
        x: 464,
        y: 204,
        width: 16,
        height: 20,
      },
      {
        x: 480,
        y: 204,
        width: 16,
        height: 20,
      },
    ]);
    return {
      frameManager,
      mode: "idle",
      loop: true,
      delay: 5,
      offsetX: -3,
      offsetY: -5,
    }
  }

export default Enemy;
