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

    this.shadowRoot.querySelector("#trigger-btn").textContent =
      this.getAttribute("sample-name");

    this.shadowRoot
      .querySelector("#trigger-btn")
      .addEventListener("mousedown", () => this.instrument.trigger());

    this.shadowRoot.querySelector("#pitch").addEventListener("change", (e) => {
      this.instrument.setPitch(e.target.value);
    });

    this.shadowRoot
      .querySelector("#distortion")
      .addEventListener("change", (e) => {
        this.instrument.setDistortion(e.target.value);
      });

    this.shadowRoot.querySelector("#high").addEventListener("change", (e) => {
      this.instrument.setHigh(e.target.value);
    });

    this.shadowRoot.querySelector("#mid").addEventListener("change", (e) => {
      this.instrument.setMid(e.target.value);
    });

    this.shadowRoot.querySelector("#low").addEventListener("change", (e) => {
      this.instrument.setLow(e.target.value);
    });

    this.shadowRoot.querySelector("#attack").addEventListener("change", (e) => {
      this.instrument.setAttack(e.target.value);
    });

    this.shadowRoot
      .querySelector("#release")
      .addEventListener("change", (e) => {
        this.instrument.setRelease(e.target.value);
      });
    ///////////////////////////////////////////////////////////////////
    this.shadowRoot.querySelector("#delay").addEventListener("change", (e) => {
      this.instrument.setDelay(e.target.value);
    });

    this.shadowRoot.querySelector("#reverb").addEventListener("change", (e) => {
      this.instrument.setReverb(e.target.value);
    });
    /////////////////////////////////////////////////////////////////////
    this.shadowRoot.querySelector("#mute").addEventListener("click", () => {
      const mute = () => {
        this.instrument.setMute(true);
        this.shadowRoot.querySelector("#mute").classList.remove("is-light");
        this.shadowRoot.querySelector("#mute").classList.add("is-dark");
      };

      const unmute = () => {
        this.instrument.setMute(false);
        this.shadowRoot.querySelector("#mute").classList.remove("is-dark");
        this.shadowRoot.querySelector("#mute").classList.add("is-light");
      };

      this.instrument.getMute() ? unmute() : mute();
    });

    this.shadowRoot.querySelector("#solo").addEventListener("click", () => {
      const solo = () => {
        this.instrument.setSolo(true);
        this.shadowRoot.querySelector("#solo").classList.remove("is-light");
        this.shadowRoot.querySelector("#solo").classList.add("is-dark");
      };

      const unsolo = () => {
        this.instrument.setSolo(false);
        this.shadowRoot.querySelector("#solo").classList.remove("is-dark");
        this.shadowRoot.querySelector("#solo").classList.add("is-light");
      };

      this.instrument.getSolo() ? unsolo() : solo();
    });

    this.shadowRoot.querySelector("#pan").addEventListener("change", (e) => {
      this.instrument.setPan(e.target.value);
    });

    this.shadowRoot.querySelector("#volume").addEventListener("change", (e) => {
      this.instrument.setVolume(e.target.value);
    });
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector(".trigger-btn")
      .removeEventListener("click", () => this.instrument.trigger());

    this.shadowRoot
      .querySelector("#pitch")
      .removeEventListener("change", (e) => {
        this.instrument.setPitch(e.target.value);
      });

    this.shadowRoot
      .querySelector("#distortion")
      .removeEventListener("change", (e) => {
        this.instrument.setDistortion(e.target.value);
      });

    this.shadowRoot
      .querySelector("#high")
      .removeEventListener("change", (e) => {
        this.instrument.setHigh(e.target.value);
      });

    this.shadowRoot.querySelector("#mid").removeEventListener("change", (e) => {
      this.instrument.setMid(e.target.value);
    });

    this.shadowRoot.querySelector("#low").removeEventListener("change", (e) => {
      this.instrument.setLow(e.target.value);
    });

    this.shadowRoot
      .querySelector("#attack")
      .removeEventListener("change", (e) => {
        this.instrument.setAttack(e.target.value);
      });

    this.shadowRoot
      .querySelector("#release")
      .removeEventListener("change", (e) => {
        this.instrument.setRelease(e.target.value);
      });

    this.shadowRoot
      .querySelector("#delay")
      .removeEventListener("change", (e) => {
        this.instrument.setDelay(e.target.value);
      });

    this.shadowRoot
      .querySelector("#reverb")
      .removeEventListener("change", (e) => {
        this.instrument.setReverb(e.target.value);
      });

    this.shadowRoot.querySelector("#mute").removeEventListener("click", () => {
      const mute = () => {
        this.instrument.setMute(true);
        this.shadowRoot.querySelector("#mute").classList.remove("is-light");
        this.shadowRoot.querySelector("#mute").classList.add("is-dark");
      };

      const unmute = () => {
        this.instrument.setMute(false);
        this.shadowRoot.querySelector("#mute").classList.remove("is-dark");
        this.shadowRoot.querySelector("#mute").classList.add("is-light");
      };

      this.instrument.getMute() ? unmute() : mute();
    });

    this.shadowRoot.querySelector("#solo").removeEventListener("click", () => {
      const solo = () => {
        this.instrument.setSolo(true);
        this.shadowRoot.querySelector("#solo").classList.remove("is-light");
        this.shadowRoot.querySelector("#solo").classList.add("is-dark");
      };

      const unsolo = () => {
        this.instrument.setSolo(false);
        this.shadowRoot.querySelector("#solo").classList.remove("is-dark");
        this.shadowRoot.querySelector("#solo").classList.add("is-light");
      };

      this.instrument.getMute() ? unsolo() : solo();
    });

    this.shadowRoot.querySelector("#pan").removeEventListener("change", (e) => {
      this.instrument.setPan(e.target.value);
    });

    this.shadowRoot
      .querySelector("#volume")
      .removeEventListener("change", (e) => {
        this.instrument.setVolume(e.target.value);
      });
  }
}
