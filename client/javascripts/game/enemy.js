import Entities from "./entities";
import Gun from "./gun";
import FrameManager from "./frame_manager";

class Enemy extends Entities {
  constructor(width, height, movement, difficulty) {
    const animatorParams = setupAnimatorParams();
    super(width, height, movement, animatorParams);

    let calcFireInterval;
    switch(difficulty) {
      case "easy":
        calcFireInterval = () => Math.random() * 7000 + 4000;
        break;
      case "medium":
        calcFireInterval = () => Math.random() * 5000 + 2000;
        break;
      case "hard":
        calcFireInterval = () => Math.random() * 3000 + 500;
        break;
    }
    this.gun = new Gun(5000, calcFireInterval, 5);

    this.health = 5;
    this.despawn = false;
    this.active = true;

    this.sound = "";
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
      this.movement.velX += 0.33 * Math.cos(angle);
      this.movement.velY += 0.33 * Math.sin(angle);

      // fire bullet at target
      this.requestFire(targetX, targetY);

      this.updateOrientation();
      this.updateAnimationMode();
    } else {
      // set loop to false if not already
      if (this.loop !== false) this.changeMode("idle", false);
      
      // only actually despawn once all bullets have despawned
      if (this.gun.bullets.length === 0) this.handleDespawn();
    }

    // update position
    super.update(friction);

    // updates bullets
    this.gun.update();

    // console.log(this.gun.bullets);
  }

  // damage should always be greater than 0
  // copied from player, common parent needed
  damage(damageAmt, knockbackVel, angle) {
    this.health -= damageAmt;
    if (this.health < 0) this.health = 0;
    
    this.movement.velX += knockbackVel * Math.cos(angle);
    this.movement.velY += knockbackVel * Math.sin(angle);

    this.sound = "hurt";
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
