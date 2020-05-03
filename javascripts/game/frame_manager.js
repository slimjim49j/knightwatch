class FrameManager {
    constructor() {
        this.store = {
        };
    }

    getFrame(mode, idx = 0) {
        return this.store[mode][idx];
    }

    getFramesLength(mode) {
        return this.store[mode].length;
    }

    setFrames(mode, frames) {
        this.store[mode] = frames;
    }
}

export default FrameManager;