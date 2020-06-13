class TileSheet {
  constructor({ size, cols, src }) {
    this.size = size;
    this.cols = cols;
    this.image = new Image();
    this.src = src;
  }

  loadImage() {
    this.image.src = this.src;
  }
}

export default TileSheet;
