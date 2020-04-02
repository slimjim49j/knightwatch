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
            window.setTimeout(() => this.firing = false, 300);
            window.setTimeout(() => this.bullets.shift(), 5000);
        }
    }

    update(timeStamp) {
        this.bullets.filter(bullet => {
            bullet.update();
            return bullet.isExpired(timeStamp);
        });
    }
}

export default Gun;