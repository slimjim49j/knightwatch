import Room from "./room";

class Level {
  constructor() {
    this.numRooms = 10;
    this.rooms = [new Room()];

    while (this.rooms.length < this.numRooms) {}
  }
}

export default Level;
