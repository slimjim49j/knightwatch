import Entities from "./entities";
import Gun from "./gun";

class Enemy extends Entities {
  constructor(width, height, movement) {
    super(width, height, movement);

    const calcFireInterval = () => (Math.random() * 3000 + 500);
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
    });
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
      
      // fire bulllet at target
      this.requestFire(targetX, targetY);
    } else {
      // only actually despawn once all bullets have despawned
      if (this.gun.bullets.length === 0) this.handleDespawn();
    }

    // updates bullets
    this.gun.update();

    
    console.log(this.gun.bullets)
  }
  
  handleDespawn() {
    this.despawn = true;
  }
}

export default Enemy;
