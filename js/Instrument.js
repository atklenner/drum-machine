// import * as Tone from "./node_modules/tone/build/Tone.js";

function newArray(n) {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i);
  }
  return array;
}

export class Instrument {
  constructor(sampleLocation) {
    this.sequenceArray = newArray(16);
    this.sequence = new Tone.Sequence(
      (time, column) => {
        if (this.sequenceArray[column] === 1) {
          this.module.start(time);
        }
      },
      newArray(16),
      "16n"
    );
    this.gain = new Tone.Gain(5);
    this.module = new Tone.Player(sampleLocation);
    this.distortion = new Tone.Distortion(0);
    this.eq = new Tone.EQ3();
    this.channel = new Tone.Channel();
    this.delaySend = this.channel.send("delay", -60);
    this.reverbSend = this.channel.send("reverb", -60);
    this.module.chain(
      this.distortion,
      this.eq,
      this.channel,
      this.gain,
      Tone.Destination
    );
  }

  trigger() {
    this.module.start();
  }

  start() {
    this.sequence.start();
  }

  stop() {
    this.sequence.stop();
  }

  setSequence(array) {
    this.sequenceArray = array;
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
