import { Instrument } from "./Instrument.js";

const template = document.querySelector("#instrument-template");

export class InstrumentComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.instrument = new Instrument(
      this.getAttribute("sample-path"),
      this.shadowRoot.querySelector(".sound-container")
    );
    this.shadowRoot.querySelector(".trigger-btn").textContent =
      this.getAttribute("sample-name");
  }
}

window.customElements.define("instrument-component", InstrumentComponent);
