import { InstrumentComponent } from "./InstrumentComponent.js";

customElements.define("instrument-component", InstrumentComponent);

// use observedAttribute lifecycle method to change the sample location

// this is just for messing around, learn new stuff you've wanted to use
// make another version of this that uses react and some component library or something

// see what Tone.Meter is about

// really you should look through the Tone API in depth and see what everything is about

const delay = new Tone.PingPongDelay({
  delayTime: "8n",
  feedback: 0.01,
  wet: 1,
});
const delayChannel = new Tone.Channel().connect(delay);
delayChannel.receive("delay");

const reverb = new Tone.Reverb({ wet: 1 });
const reverbChannel = new Tone.Channel().connect(reverb);
reverbChannel.receive("reverb");
