const delay = new Tone.PingPongDelay({
  delayTime: "8n",
  feedback: 0.01,
  wet: 1,
});
const delayChannel = new Tone.Channel().connect(delay);
delayChannel.receive("delay");

const reverb = new Tone.Reverb({ wet: 1 });
const reverbChannel = new Tone.Channel().connect(reverb);
reverbChannel.receive("reverb");
