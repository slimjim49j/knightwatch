import Entities from "./entities";
import Gun from "./gun";
import FrameManager from "./frame_manager";

class Player extends Entities {
  constructor(width, height, movement) {
    const animatorParams = setupAnimatorParams();
    super(width, height, movement, animatorParams);
    
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
    this.updateAnimationMode();
    this.gun.update();
  }

  // repetetive, player / enemy need a common parent wihtout bullet
  updateAnimationMode() {
    const speed = Math.abs(this.movement.velX);
    if (speed > 1 && this.mode === "idle") this.changeMode("run", true);
    else if (speed < 1 && this.mode === "run") this.changeMode("idle", true);
  }

  moveUp(vel) {
    this.movement.velY -= vel;
  }

  moveRight(vel) {
    this.orientation = "right";
    this.movement.velX += vel;
  }

  moveDown(vel) {
    this.movement.velY += vel;
  }

  moveLeft(vel) {
    this.orientation = "left";
    this.movement.velX -= vel;
  }
}

function setupAnimatorParams() {
    const frameManager = new FrameManager();
    frameManager.setFrames(
      "idle",
      [
        {
          x: 128,
          y: 74,
          width: 16,
          height: 22,
        },
        {
          x: 144,
          y: 74,
          width: 16,
          height: 22,
        },
        {
          x: 160,
          y: 74,
          width: 16,
          height: 22,
        },
        {
          x: 176,
          y: 74,
          width: 16,
          height: 22,
        }
      ]
    );
    frameManager.setFrames(
      "run",
      [
        {
          x: 192,
          y:74,
          width:16,
          height:22,
        },
        {
          x: 208,
          y:74,
          width:16,
          height:22,
        },
        {
          x: 224,
          y:74,
          width:16,
          height:22,
        },
        {
          x: 240,
          y:74,
          width:16,
          height:22,
        }
      ]
    );
    return {
      frameManager,
      mode: "idle",
      loop: true,
      delay: 5,
    }
  }

export default Player;