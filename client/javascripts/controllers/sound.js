import * as Tone from "tone";

class Sound {
    constructor() {
        // var synth = new Tone.Synth();
        // synth.toMaster();
        // synth.triggerAttackRelease("C4", "8n");

    }

    // async start() {
    //     await Tone.start();
    //     console.log("ready");
    // }

    test() {
        //create a synth and connect it to the master output (your speakers)
        const synth = new Tone.Synth().toMaster();

        //play a middle 'C' for the duration of an 8th note
        
    }
}

export default Sound;