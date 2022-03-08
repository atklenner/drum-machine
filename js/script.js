import { InstrumentComponent } from "./InstrumentComponent.js";
import "./MasterFX.js";

customElements.define("instrument-component", InstrumentComponent);

// use observedAttribute lifecycle method to change the sample location

// this is just for messing around, learn new stuff you've wanted to use
// make another version of this that uses react and some component library or something

// see what Tone.Meter is about

// really you should look through the Tone API in depth and see what everything is about

// const monoSynth = new Tone.MonoSynth({
//   oscillator: {
//     type: "square",
//   },
//   envelope: {
//     attack: 0.1,
//     decay: 0,
//   },
// });
// const monoChannel = new Tone.Channel().toDestination();
// monoChannel.send("delay");
// monoChannel.send("reverb");
// monoSynth.connect(monoChannel);

// monoSynth.triggerAttackRelease("C4", "8n");
const seqStart = document.querySelector("#seq-start");
const seqStop = document.querySelector("#seq-stop");
const seqReset = document.querySelector("#seq-reset");
const instruments = document.querySelectorAll("instrument-component");

function newArray(n) {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(0);
  }
  return array;
}

const drumSequence = [];
for (let i = 0; i < 8; i++) {
  drumSequence.push(newArray(16));
}

const drumSequencer = document.querySelector("#drum-seq");
drumSequence.forEach((row, rowIndex) => {
  const divRow = document.createElement("div");
  divRow.classList.add("columns");
  const label = document.createElement("span");
  label.textContent = instruments[rowIndex].getAttribute("sample-name");
  label.classList.add("icon", "column", "block");
  divRow.appendChild(label);
  row.forEach((col, colIndex) => {
    const divCol = document.createElement("button");
    divCol.classList.add("button", "column", "seq-step");
    divCol.textContent = colIndex + 1;
    divCol.addEventListener("click", () => {
      if (drumSequence[rowIndex][colIndex] === 1) {
        divCol.classList.remove("is-dark");
        drumSequence[rowIndex][colIndex] = 0;
      } else {
        divCol.classList.add("is-dark");
        drumSequence[rowIndex][colIndex] = 1;
      }
    });
    divRow.appendChild(divCol);
  });
  drumSequencer.appendChild(divRow);
});

Tone.Transport.bpm.value = 120;
Tone.Transport.scheduleRepeat(() => {
  console.log("repeat");
}, "1m");

seqStart.addEventListener("click", () => {
  instruments.forEach((instrument, index) => {
    instrument.instrument.setSequence(drumSequence[index]);
    instrument.instrument.start();
  });
  Tone.Transport.start();
});

seqStop.addEventListener("click", () => {
  instruments.forEach((instrument) => {
    instrument.instrument.stop();
  });
  Tone.Transport.stop();
});

seqReset.addEventListener("click", () => {
  for (let i = 0; i < 8; i++) {
    drumSequence.shift();
    drumSequence.push(newArray(16));
  }
  document
    .querySelectorAll(".seq-step")
    .forEach((step) => step.classList.remove("is-dark"));
});
