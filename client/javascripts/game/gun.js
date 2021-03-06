import Bullet from "./bullet";
import { Timer } from "../util/timers";

class Gun {
  constructor(bulletExpireTime, calcFireInterval, knockbackVel) {
    this.bullets = [];
    this.bulletExpireTime = bulletExpireTime;
    this.calcFireInterval = calcFireInterval;
    this.knockbackVel = knockbackVel;
    this.firing = false;
  }

  fire(movement, angle) {
    if (!this.firing) {
      // debugger
      this.bullets.push(new Bullet(3, 3, this.bulletExpireTime, movement, angle, this.knockbackVel));
      this.firing = true;
      this.allowFire = new Timer(() => (this.firing = false), this.calcFireInterval());
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
