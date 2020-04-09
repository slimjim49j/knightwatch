class Entities {
  constructor(width, height, { posX, posY, velX, velY }) {
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
    this.movement.velX *= friction;
    this.movement.velY *= friction;

    const { velX, velY } = this.movement;
    this.movement.posX += velX;
    this.movement.posY += velY;
  }
}

export default Entities;
