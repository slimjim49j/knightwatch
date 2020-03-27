class Entities {
  constructor({ posX, posY, velX, velY }) {
    this.movement = {
      posX: posX,
      posY: posY,
      velX: velX,
      velY: velY
    };

    this.moveUp = this.moveUp.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.update = this.update.bind(this);
  }

  moveUp(vel) {
    this.movement.velY -= vel;
  }

  moveRight(vel) {
    this.movement.velX += vel;
  }

  moveDown(vel) {
    this.movement.velY += vel;
  }

  moveLeft(vel) {
    this.movement.velX -= vel;
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
