import { Instrument } from "./Instrument.js";

const template = document.querySelector("#instrument-template");

export class InstrumentComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.instrument = new Instrument(
      this.getAttribute("sample-path"),
      this.shadowRoot.querySelector(".sound-container")
    );

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector(".trigger-btn").textContent =
      this.getAttribute("sample-name");

    this.shadowRoot
      .querySelector(".trigger-btn")
      .addEventListener("mousedown", () => this.instrument.trigger());

    this.shadowRoot
      .querySelector("#distortion")
      .addEventListener("change", (e) => {
        this.instrument.setDistortion(e.target.value);
      });

    this.shadowRoot.querySelector("#filter").addEventListener("change", (e) => {
      this.instrument.setFilter(e.target.value);
    });

    this.shadowRoot.querySelector("#volume").addEventListener("change", (e) => {
      this.instrument.setVolume(e.target.value);
    });

    this.shadowRoot.querySelector("#pitch").addEventListener("change", (e) => {
      this.instrument.setPitch(e.target.value);
    });
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector(".trigger-btn")
      .removeEventListener("click", () => this.instrument.trigger());

    this.shadowRoot
      .querySelector("#distortion")
      .removeEventListener("change", (e) => {
        this.instrument.setDistortion(e.target.value);
      });

    this.shadowRoot
      .querySelector("#filter")
      .removeEventListener("change", (e) => {
        this.instrument.setFilter(e.target.value);
      });

    this.shadowRoot
      .querySelector("#volume")
      .removeEventListener("change", (e) => {
        this.instrument.setVolume(e.target.value);
      });

    this.shadowRoot
      .querySelector("#pitch")
      .removeEventListener("change", (e) => {
        this.instrument.setPitch(e.target.value);
      });
  }
}
