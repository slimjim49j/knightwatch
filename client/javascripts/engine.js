// fixed time step game loop
//   ensures that game gets updated at constant rate

class Engine {
  constructor(timeStep, update, render, playSound) {
    this.accumulatedTime = 0;
    this.animationFrameRequest = undefined;
    this.time = undefined;
    this.timeStep = timeStep;

    this.updated = false;

    this.update = update;
    this.render = render;
    this.playSound = playSound;

    this.run = this.run.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  run(timeStamp) {
    // request next frame
    this.animationFrameRequest = window.requestAnimationFrame(this.run);

    // update accumulated time, time
    this.accumulatedTime += timeStamp - this.time;
    this.time = timeStamp;

    // if accumulated time is too large, only create one update
    // this prevents a memory spiral
    if (this.accumulatedTime >= this.timeStep * 3) {
      this.accumulatedTime = this.timeStep;
    }

    // update game state
    while (this.accumulatedTime >= this.timeStep) {
      this.accumulatedTime -= this.timeStep;

      this.update(timeStamp);
      this.updated = true;
    }

    // if game state has been updated, render
    // not in while loop since this would cause multiple renders
    if (this.updated) {
      this.updated = false;
      this.render(timeStamp);
      this.playSound();
    }
  }

  start() {
    this.accumulatedTime = this.timeStep;
    this.time = window.performance.now();
    this.animationFrameRequest = window.requestAnimationFrame(this.run);
  }

  stop() {
    window.cancelAnimationFrame(this.animationFrameRequest);
  }
}

export default Engine;
