// import * as Tone from "./node_modules/tone/build/Tone.js";

export class Instrument {
  constructor(sampleLocation) {
    this.module = new Tone.Player(sampleLocation);
    this.distortion = new Tone.Distortion(0);
    this.filter = new Tone.Filter(20000, "lowpass");
    this.module.chain(this.distortion, this.filter, Tone.Destination);
  }

  trigger() {
    this.module.start();
  }

  setDistortion(value) {
    this.distortion.set({ distortion: value });
  }

  setFilter(value) {
    this.filter.set({ frequency: value });
  }

  setVolume(value) {
    this.module.set({ volume: value });
  }

  setPitch(value) {
    this.module.set({ playbackRate: value });
  }
}
