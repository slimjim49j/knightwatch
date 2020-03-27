// fixed time step game loop
//   ensures that game gets updated at constant rate

class Engine {
  constructor(time_step, update, render) {
    this.accumulated_time = 0;
    this.animation_frame_request = undefined;
    this.time = undefined;
    this.time_step = time_step;

    this.updated = false;

    this.update = update;
    this.render = render;

    this.run = this.run.bind(this);

    this.run = this.run.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  run(time_stamp) {
    // request next frame
    this.animation_frame_request = window.requestAnimationFrame(this.run);

    // update accumulated time, time
    this.accumulated_time += time_stamp - this.time;
    this.time = time_stamp;

    // if accumulated time is too large, only create one update
    // this prevents a memory spiral
    if (this.accumulated_time >= this.time_step * 3) {
      this.accumulated_time = this.time_step;
    }

    // update game state
    while (this.accumulated_time >= this.time_step) {
      this.accumulated_time -= this.time_step;

      this.update(time_stamp);
      this.updated = true;
    }

    // if game state has been updated, render
    // not in while loop since this would cause multiple renders
    if (this.updated) {
      this.updated = false;
      this.render(time_stamp);
    }
  }

  start() {
    this.accumulated_time = this.time_step;
    this.time = window.performance.now();
    this.animation_frame_request = window.requestAnimationFrame(this.run);
  }

  stop() {
    window.cancelAnimationFrame(this.animation_frame_request);
  }
}

export default Engine;
