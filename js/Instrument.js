// import * as Tone from "./node_modules/tone/build/Tone.js";

export class Instrument {
  constructor(sampleLocation) {
    this.gain = new Tone.Gain(5);
    this.module = new Tone.Player(sampleLocation);
    this.distortion = new Tone.Distortion(0);
    this.eq = new Tone.EQ3();
    this.compressor = new Tone.Compressor({
      attack: 0.004,
      release: 0.53,
      threshold: -40,
      ratio: 1,
      knee: 30,
    });
    this.channel = new Tone.Channel();
    this.delaySend = this.channel.send("delay", -60);
    this.reverbSend = this.channel.send("reverb", -60);
    this.module.chain(
      this.distortion,
      this.eq,
      this.compressor,
      this.channel,
      this.gain,
      Tone.Destination
    );
  }

  trigger() {
    this.module.start();
  }

  setPitch(value) {
    this.module.set({ playbackRate: value });
  }

  setDistortion(value) {
    this.distortion.set({ distortion: value });
  }

  setHigh(value) {
    this.eq.set({ high: value });
  }

  setMid(value) {
    this.eq.set({ mid: value });
  }

  setLow(value) {
    this.eq.set({ low: value });
  }

  setAttack(value) {
    this.compressor.set({ attack: value });
  }

  setRelease(value) {
    this.compressor.set({ release: value });
  }

  setRatio(value) {
    this.compressor.set({ ratio: value });
  }

  setDelay(value) {
    this.delaySend.set({ gain: value });
  }

  setReverb(value) {
    this.reverbSend.set({ gain: value });
  }

  setMute(bool) {
    this.channel.set({ mute: bool });
  }

  getMute() {
    return this.channel.get()["mute"];
  }

  setSolo(bool) {
    this.channel.set({ solo: bool });
  }

  getSolo() {
    return this.channel.get()["solo"];
  }

  setPan(value) {
    this.channel.set({ pan: value });
  }

  setVolume(value) {
    this.channel.set({ volume: value });
  }
}
