import Enemy from "./enemy";
import Player from "./player";
import World from "./world";
import { IntervalTimer } from "../util/timers";

class Game {
  constructor() {
    this.player = new Player(8, 16, {
      posX: 50,
      posY: 50,
      velX: 0,
      velY: 0,
    });

    this.bullets = [];
    this.enemies = [];

    this.world = new World();

    this.bulletCollisionDetection = this.bulletCollisionDetection.bind(this);

    this.waveInProgress = false;
    this.difficulty = 0;

    this.interval;

    this.score = 0;
  }

  update(timeStamp) {
    this.player.update(this.world.friction);
    this.world.handleCollision(this.player);
    
    this.enemies = this.enemies.filter(enemy => {
      enemy.update(
        this.world.friction,
        this.player.movement.posX,
        this.player.movement.posY
      )
      this.world.handleCollision(enemy);

      if (enemy.despawn) this.score++;
      return !enemy.despawn;
    });
    
    // manager updates after enemies
    this.updateEnemyManager();

    // not entirely sure where this should be relative to other updates
    // I'm moving it down here from all the way up top so wall collision detection can happen after movement
    this.bulletCollisionDetection();
  }

  bulletCollisionDetection() {
    this.player.gun.bullets.forEach(bullet => {
      this.world.handleCollision(bullet);
    });
    
    this.enemies.forEach(enemy => {
      // player bullet collision
      enemy.gun.bullets.forEach(bullet => {
        this.world.handleCollision(bullet);
        
        if (bullet.isColliding(this.player)) {
          this.player.damage(bullet.damage);
        }
        // console.log("player health:", this.player.health);
      }, this);

      // enemy bullet collision
      if (enemy.active) {
        this.player.gun.bullets.forEach(bullet => {
          if (bullet.isColliding(enemy)) {
            enemy.health -= bullet.damage;
          }
          // console.log("enemy health:", enemy.health);
        });
      }
    }, this);
  }

  updateEnemyManager() {
    // console.log(this.difficulty);
    if (!this.waveInProgress && this.enemies.length === 0) {
      this.waveInProgress = true;
      this.player.heal(2);
      
      this.difficulty++;
      let enemyCount = Math.round(5 * this.difficulty);

      if (this.interval instanceof IntervalTimer) this.interval.pause();
      this.interval = new IntervalTimer(() => {
        if (enemyCount > 0) {
          this.enemies.push(
            new Enemy(
              10, 10,
              {
                posX: Math.random() * this.world.width,
                posY: Math.random() * this.world.height,
                velX: 0,
                velY: 0 
              }
            )
          );
          enemyCount--;
        } else {
          this.waveInProgress = false;
          // window.clearInterval(this.interval);
        }
      }, 2000 / this.difficulty);
    }

  }

}

export default Game;
