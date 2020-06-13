// import Entities from "./entities";
// import Gun from "./gun";

// class Mob extends Entities {
//   constructor(width, height, health, movement) {
//     super(width, height, movement);

//     this.weapon = new Gun(5000);
//     this.health = health;
//   }

//   requestFire(targetX, targetY) {
//     const { posX: mobX, posY: mobY } = this.movement;
//     const angle = Math.atan2(targetY - mobY, targetX - mobX);

//     this.weapon.fire({
//       posX: mobX,
//       posY: mobY,
//       velX: 5 * Math.cos(angle),
//       velY: 5 * Math.sin(angle),
//     });
//   }

//   update(friction) {
//     super.update(friction);
//     this.weapon.update();
//   }
// }

// export default Mob;
