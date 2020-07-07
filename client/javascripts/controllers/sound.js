import * as Tone from "tone";
const tetrisTheme = require("../../audio/tetris_theme.json");

class Sound {
    constructor() {
        this.player = new Tone.Players(
            {
                enemyHurt1: "../../audio/Zombie_hurt1.ogg",
                enemyHurt2: "../../audio/Zombie_hurt2.ogg",
                playerHurt1: "../../audio/Player_hurt1.ogg",
            }
        ).toMaster();
    }

    // background music
    createSynth() {
        //create a synth and connect it to the master output (your speakers)
        this.synth = new Tone.PolySynth(4, Tone.Synth, { oscillator: { type: "sawtooth" } }).toMaster();
        this.synth.set("detune", -1000);
        this.synth.set("volume", -7);
    }

    createPart() {
        //pass in an array of events
        this.part = new Tone.Part((time, event) => {
            //the events will be given to the callback with the time they occur
            this.synth.triggerAttackRelease(event.name, event.duration, time)
        }, tetrisTheme);

        //start the part at the beginning of the Transport's timeline
        this.part.start(0);

        //loop the part after 135s infinitely
        // (song lasts approx 1:35, extra time is for padding)
        this.part.loop = true;
        this.part.loopEnd = 135;
    }

    startMusic() {
        if (!this.synth) this.createSynth();
        if (!this.part) this.createPart();
        
        Tone.Transport.start();
    }

    pauseMusic() {
        Tone.Transport.pause();
    }

    isPlayingMusic() {
        return Tone.Transport.state === "started";
    }


    // sound effects 
    playerHurt() {
        this.player.get("playerHurt1").start();
    }

    enemyHurt() {
        this.player.get(Math.round(Math.random()) ? "enemyHurt1" : "enemyHurt2").start();
    }
}

export default Sound;