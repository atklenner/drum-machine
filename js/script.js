import { InstrumentComponent } from "./InstrumentComponent.js";
import "./MasterFX.js";

customElements.define("instrument-component", InstrumentComponent);

// use observedAttribute lifecycle method to change the sample location

// this is just for messing around, learn new stuff you've wanted to use
// make another version of this that uses react and some component library or something

// see what Tone.Meter is about

// really you should look through the Tone API in depth and see what everything is about

// const monoSynth = new Tone.MonoSynth({
//   oscillator: {
//     type: "square",
//   },
//   envelope: {
//     attack: 0.1,
//     decay: 0,
//   },
// });
// const monoChannel = new Tone.Channel().toDestination();
// monoChannel.send("delay");
// monoChannel.send("reverb");
// monoSynth.connect(monoChannel);

// monoSynth.triggerAttackRelease("C4", "8n");
