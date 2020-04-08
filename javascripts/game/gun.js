import Bullet from "./bullet";

class Gun {
  constructor(bulletExpireTime) {
    this.fireInterval;
    this.bullets = [];
    this.bulletExpireTime = bulletExpireTime;
    this.firing = false;

  }

  fire(movement) {
    if (!this.firing) {
      // debugger
      this.bullets.push(new Bullet(3, 3, this.bulletExpireTime, movement));
      this.firing = true;
      window.setTimeout(() => (this.firing = false), 300);
    }
  }

  update(timeStamp) {
    this.bullets = this.bullets.filter(bullet => {
      bullet.update();
      return !bullet.isExpired(timeStamp);
    });
  }
}

export default Gun;
