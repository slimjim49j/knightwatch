import Controller from "./controller";
import Display from "./display";
import Engine from "./engine";
import Game from "./game";

const render = function() {
    display.renderColor("#000000");
}

const update = function() {
    game.update();
}

const controller = new Controller;
const display = new Display(document.querySelector("canvas"));
const engine = new Engine(1000/30, render, update);
const game = new Game;




window.addEventListener("resize", display.handleResize);
window.addEventListener("keydown", controller.handleKeyChange);
window.addEventListener("keyup", controller.handleKeyChange);

display.handleResize();
engine.start();