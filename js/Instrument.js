// import * as Tone from "./node_modules/tone/build/Tone.js";

export class Instrument {
  constructor(sampleLocation) {
    this.gain = new Tone.Gain(3);
    this.module = new Tone.Player(sampleLocation);
    this.distortion = new Tone.Distortion(0);
    this.eq = new Tone.EQ3();
    this.compressor = new Tone.Compressor({
      attack: 0.004,
      release: 0.53,
      threshold: -40,
      ratio: 4,
      knee: 30,
    });
    this.channel = new Tone.Channel();
    this.channel.send("delay");
    this.channel.send("reverb");
    this.module.chain(
      this.gain,
      this.distortion,
      this.eq,
      this.compressor,
      this.channel,
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
    this.pingPong.set({ wet: value });
  }

  setReverb(value) {
    this.reverb.set({ wet: value });
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
