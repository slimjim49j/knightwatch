import Bullet from "./bullet";

class Gun {
    constructor() {
        this.fireInterval;
        this.bullets = [];
        this.firing = false;
    }

    fire(movement) {
        if (!this.firing) {
            // debugger
            this.bullets.push(new Bullet(movement));
            this.firing = true;
            window.setTimeout(() => this.firing = false, 2000);
            window.setTimeout(() => this.bullets.unshift(), 1000);
        }
    }

    update(timeStamp) {
        this.bullets.filter(bullet => {
            bullet.update();
            return bullet.isExpired(timeStamp);
        });
        console.log(this.bullets)
    }
}

export default Gun;