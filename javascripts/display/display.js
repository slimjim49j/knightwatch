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

  drawSquare({ x, y, width, height }) {
    console.log(x, y);
    this.buffer.fillStyle = "white";
    this.buffer.fillRect(Math.round(x), Math.round(y), width, height);
  }

  drawMap(map) {
    const size = this.tileSheet.size;
    map.forEach((row, i) => {
      row.forEach((tile, j) => {
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

  handleResize(height, width, worldRatio) {
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
