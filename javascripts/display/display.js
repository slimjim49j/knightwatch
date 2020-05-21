import TileSheet from "./tilesheet";

class Display {
  constructor(canvas) {
    this.buffer = document.createElement("canvas").getContext("2d");
    this.context = canvas.getContext("2d");

    this.tileSheet = new TileSheet({
      size: 16,
      cols: 32,
      src: "./tileset/0x72_DungeonTilesetII_v1.3.png"
    });

    this.handleResize = this.handleResize.bind(this);
    this.renderColor = this.renderColor.bind(this);
    this.drawSquare = this.drawSquare.bind(this);
    this.render = this.render.bind(this);
  }

  renderColor(color) {
    this.buffer.fillStyle = color;
    this.buffer.fillRect(
      0,
      0,
      this.buffer.canvas.width,
      this.buffer.canvas.height
    );
  }

  drawSquare({ x, y, width, height, color }) {
    // console.log(x, y);
    this.buffer.fillStyle = color;
    this.buffer.fillRect(Math.round(x), Math.round(y), width, height);
  }

  drawObject(frame, destX, destY) {
    // debugger
    this.buffer.imageSmoothingEnabled = false;
    if (frame.orientation === "right") {

      this.buffer.drawImage(
        this.tileSheet.image,
        frame.x,
        frame.y,
        frame.width,
        frame.height,
        destX,
        destY,
        frame.width,
        frame.height
        );
    } else {
    
        // move to x + img's width
        // adding img.width is necessary because we're flipping from
        //     the right side of the img so after flipping it's still
        //     at [x,y]
        this.buffer.translate(destX + frame.width, destY);

        // scaleX by -1; this "trick" flips horizontally
        this.buffer.scale(-1, 1);

        // draw the img
        // no need for x,y since we've already translated
        this.buffer.drawImage(
          this.tileSheet.image,
          frame.x,
          frame.y,
          frame.width,
          frame.height,
          0,
          0,
          frame.width,
          frame.height
        );

        // always clean up -- reset transformations to default
        this.buffer.setTransform(1, 0, 0, 1, 0, 0);

        // https://stackoverflow.com/questions/35973441/how-to-horizontally-flip-an-image
    }
  }

  drawRotatedObject(frame, destX, destY, angle) {
    // this.buffer.setTransform(scale, 0, 0, scale, x, y); // sets scale and origin
    // debugger
    this.buffer.imageSmoothingEnabled = false;
    this.buffer.translate(destX, destY);
    this.buffer.rotate(angle + (Math.PI / 2));
    this.buffer.drawImage(
      this.tileSheet.image,
      frame.x,
      frame.y,
      frame.width,
      frame.height,
      0,
      0,
      frame.width,
      frame.height);

    // this.buffer.rotate(-angle + (Math.PI / 2));
    this.buffer.setTransform(1, 0, 0, 1, 0, 0);
  }

  drawMap(map) {
    const size = this.tileSheet.size;
    map.forEach((row, i) => {
      row.forEach((tile, j) => {
        if (tile === 0) return;
        
        // coordinates of tile in tilesheet
        const tileX = (tile % this.tileSheet.cols) * size;
        const tileY = Math.floor(tile / this.tileSheet.cols) * size;
        // coordinates to place tile in buffer canvas
        const bufferX = j * size;
        const bufferY = i * size;

        this.buffer.drawImage(
          this.tileSheet.image,
          tileX,
          tileY,
          size,
          size,
          bufferX,
          bufferY,
          size,
          size
        );
      });
    });
  }

  drawHealth(worldWidth, worldHeight, health, maxHealth) {
    const barWidth = worldWidth * 0.2;
    if (barWidth < 30) barWidth = 30;
    if (barWidth > 300) barWidth = 300;
    
    const healthWidth = barWidth * health / maxHealth;
    this.drawSquare({x: 25, y: worldHeight - 25, width: barWidth, height: 10, color: "black"})
    this.drawSquare({x: 25, y: worldHeight - 25, width: healthWidth, height: 10, color: "red"})
  }

  render() {
    this.context.drawImage(
      this.buffer.canvas,
      0,
      0,
      this.buffer.canvas.width,
      this.buffer.canvas.height,
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );
  }

  handleResize(width, height, worldRatio) {
    if (height / width > worldRatio) {
      this.context.canvas.height = width * worldRatio;
      this.context.canvas.width = width;
    } else {
      this.context.canvas.height = height;
      this.context.canvas.width = height / worldRatio;
    }

    this.context.imageSmoothingEnabled = false;
  }
}

export default Display;
