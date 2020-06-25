import * as Tone from "tone";
const tetrisTheme = require("./tetris_theme.json");

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
        const synth = new Tone.PolySynth(4, Tone.Synth, {oscillator : {type: "sawtooth"}}).toMaster();
        synth.set("detune", -1000);


        // synth.triggerAttackRelease('A4', 3, 0)
        // synth.triggerAttackRelease('D4', 3, 1)
        // synth.triggerAttackRelease('A4', 3, 2)
        // synth.triggerAttackRelease('C1', 3, 3)

        //pass in an array of events
        var part = new Tone.Part(function (time, event) {
            //the events will be given to the callback with the time they occur
            synth.triggerAttackRelease(event.name, event.duration, time)
        }, tetrisTheme)

        //start the part at the beginning of the Transport's timeline
        part.start(0)

        //loop the part 3 times
        // part.loop = 1
        // part.loopEnd = '10m'
        Tone.Transport.toggle()

        //start/stop the transport
        // document.querySelector('tone-play-toggle').addEventListener('change', e => Tone.Transport.toggle())
        
        
    }
}

export default Sound;