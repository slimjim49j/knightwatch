import Player from "./player";
import World from "./world";

class Game {
  constructor() {
    this.player = new Player({
      posX: 50,
      posY: 50,
      velX: 0,
      velY: 0
    });

    this.world = new World();
  }

  update() {
    this.player.update(this.world.friction);
  }
}

export default Game;