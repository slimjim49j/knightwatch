import Entities from "./entities";

class Bullet extends Entities {
  constructor(movement) {
    super(movement);
    // this.spawnTime = spawnTime;
    // this.expirationTime = 5000;
    this.expired = false;
    window.setTimeout(() => this.expired = true, 1000);
  }

  update() {
    // debugger
    console.log(this.movement)
    Entities.prototype.update.call(this, 1);

  }

  isExpired() {
    // return (currentTime - this.spawnTime) > this.expirationTime;
    return this.expired;
  }
}

export default Bullet;