export class Instrument {
  constructor(sampleLocation, DOMelement) {
    this.module = new Tone.Player(sampleLocation);
    this.distortion = new Tone.Distortion(0);
    this.filter = new Tone.Filter(20000, "lowpass");
    // this.pitch = 60;
    // this.decay = 1;
    this.module.chain(this.distortion, this.filter, Tone.Destination);
    this.DOMelement = document.querySelector(DOMelement);
    this.setControls();
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

  // setDecay(value) {
  //   this.pitch = value;
  // }

  setVolume(value) {
    this.module.set({ volume: value });
  }

  setPitch(value) {
    this.module.set({ playbackRate: value });
  }

  setControls() {
    const triggerBtn = this.DOMelement.querySelector(".trigger-btn");
    triggerBtn.addEventListener("click", () => this.trigger());

    const distSlider = this.DOMelement.querySelector("#distortion");
    distSlider.addEventListener("change", (e) => {
      this.setDistortion(e.target.value);
    });

    const filter = this.DOMelement.querySelector("#filter");
    filter.addEventListener("change", (e) => {
      this.setFilter(e.target.value);
    });

    const volume = this.DOMelement.querySelector("#volume");
    volume.addEventListener("change", (e) => {
      this.setVolume(e.target.value);
    });

    const pitch = this.DOMelement.querySelector("#pitch");
    pitch.addEventListener("change", (e) => {
      this.setPitch(e.target.value);
    });
  }
}
