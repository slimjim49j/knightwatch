import Animator from "./animator";

class Entities extends Animator {
  constructor(width, height, { posX, posY, velX, velY }, animatorParams) {
    // debugger;
    super(animatorParams);
  
    this.movement = {
      posX: posX,
      posY: posY,
      velX: velX,
      velY: velY
    };
    this.width = width;
    this.height = height;

    // this.update = this.update.bind(this);
  }

  update(friction) {
    super.update();
    
    this.movement.velX *= friction;
    this.movement.velY *= friction;

    const { velX, velY } = this.movement;
    this.movement.posX += velX;
    this.movement.posY += velY;
  }
}

export default Entities;
