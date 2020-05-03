/*
    whole purpose is to get the correct sprite coords to print to screen
    
    loop: if sprite should be animated or not

    if looping: engineFrameCount is incremented until it reaches the delay,
    then the next sprite in the sequence is selected from the frameManager
*/
class Animator {
    constructor({frameManager, mode, loop, delay}) {
        this.frameManager = frameManager;
        this.currentFrame;
        this.currentFrameIdx = 0;
        this.orientation = "left";
        this.mode = mode;
        this.loop = loop;

        this.engineFrameCount = 0;
        this.delay = delay;
    }

    changeMode(mode, loop) {
        this.mode = mode;
        this.loop = loop;
        this.currentFrameIdx = 0;
    }

    update() {
        if (this.loop) {
            this.engineFrameCount++;
            const framesLength = this.frameManager.getFramesLength(this.mode);
            while (this.engineFrameCount >= this.delay) {
                this.engineFrameCount -= this.delay;
                this.currentFrameIdx = (this.currentFrameIdx + 1) % framesLength;
            }
            this.currentFrame = this.frameManager.getFrame(this.mode, this.currentFrameIdx);
        } else {
            this.currentFrame = this.frameManager.getFrame(this.mode);
        }
        this.currentFrame.orientation = this.orientation;
    }
}

export default Animator;