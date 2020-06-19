import * as Tone from "tone";

class Sound {
    constructor() {
    }

    async start() {
        await Tone.start();
        console.log("ready");
    }
}

export default Sound;