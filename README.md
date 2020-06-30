# KnightWatch

[Link to site](https://knight-watch.herokuapp.com/)

Fight infinite waves of enemies in increasingly difficult battles!

![Image of Knight Fighting Orcs](https://github.com/slimjim49j/knightwatch/blob/master/readme_images/gameplay.png)

After every wave, the difficulty is increased, resulting in more enemies spawning at a higher rate.


## Technologies
**Backend:**
- Node
- Express
- MongoDB

**Frontend:**
- Axios
- Tone.js
- Canvas API

```javascript
const render = function() {
  display.renderColor("#000000");
  display.drawMap(game.world.map);
  
  // draw enemies
  game.enemies.forEach(enemy => {
    if (enemy.active) {
      display.drawObject(
        enemy.currentFrame,
        enemy.movement.posX + enemy.offsetX,
        enemy.movement.posY + enemy.offsetY
      );
    } else {
      display.drawRotatedObject(
        enemy.currentFrame,
        enemy.movement.posX,
        enemy.movement.posY,
        60
      );
    }
  });
    
  // draw player
  const { posX: playerX, posY: playerY } = game.player.movement;
  // display.drawSquare({x: playerX, y: playerY, width: game.player.width, height: game.player.height, color: "pink" });
  display.drawObject(game.player.currentFrame, playerX + game.player.offsetX, playerY + game.player.offsetY);

  // bullets
  game.player.gun.bullets.forEach(bullet => {
    display.drawRotatedObject(
      bullet.currentFrame,
      bullet.movement.posX + bullet.offsetX,
      bullet.movement.posY + bullet.offsetY,
      bullet.angle
    );
  });

  game.enemies.forEach(enemy => {
    enemy.gun.bullets.forEach(bullet => {
      display.drawRotatedObject(bullet.currentFrame,
        bullet.movement.posX + bullet.offsetX,
        bullet.movement.posY + bullet.offsetY,
        bullet.angle
      );
    });
  })

  // top of map
  display.drawMap(game.world.topMap);

  // shadow
  display.drawRadialGradient({
    innerX: playerX,
    innerY: playerY,
    innerR: 15,
    outerX: playerX,
    outerY: playerY,
    outerR: 500
  });
  
  // ui
  display.drawHealth(game.world.width, game.world.height, game.player.health, game.player.maxHealth);
  
  display.render();
};
```
This is the main render function that tells the display class what to draw to the canvas. This function is given to the engine class which calls it on every successful game update.
