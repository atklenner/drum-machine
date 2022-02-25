import { Instrument } from "./Instrument.js";

// const kick = new Instrument(Tone.MembraneSynth, ".kick");
// const snare = new Instrument(Tone.NoiseSynth, ".snare");
// const cymbal = new Instrument(Tone.MetalSynth, ".cymbal");

// maybe this should be a sample player more than a synth, just to keep the controls more consistent

// const sample = new Tone.Player();
const kick = new Instrument("./public/707Kick.WAV", ".kick");
const snare = new Instrument("./public/707Snare.WAV", ".snare");
// Tone.loaded().then(() => {
//   sample.start();
// });
