export class Instrument {
  constructor(sampleLocation, DOMElement) {
    this.module = new Tone.Player(sampleLocation);
    this.distortion = new Tone.Distortion(0);
    this.filter = new Tone.Filter(20000, "lowpass");
    this.module.chain(this.distortion, this.filter, Tone.Destination);
    this.DOMElement = DOMElement;
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

  setVolume(value) {
    this.module.set({ volume: value });
  }

  setPitch(value) {
    this.module.set({ playbackRate: value });
  }

  setControls() {
    const triggerBtn = this.DOMElement.querySelector(".trigger-btn");
    triggerBtn.addEventListener("click", () => this.trigger());

    const distSlider = this.DOMElement.querySelector("#distortion");
    distSlider.addEventListener("change", (e) => {
      this.setDistortion(e.target.value);
    });

    const filter = this.DOMElement.querySelector("#filter");
    filter.addEventListener("change", (e) => {
      this.setFilter(e.target.value);
    });

    const volume = this.DOMElement.querySelector("#volume");
    volume.addEventListener("change", (e) => {
      this.setVolume(e.target.value);
    });

    const pitch = this.DOMElement.querySelector("#pitch");
    pitch.addEventListener("change", (e) => {
      this.setPitch(e.target.value);
    });
  }
}
