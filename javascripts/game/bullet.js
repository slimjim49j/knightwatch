import Entities from "./entities";

class Bullet extends Entities {
  constructor(width, height, expireTime, movement) {
    super(width, height, movement);
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

export default Bullet;
