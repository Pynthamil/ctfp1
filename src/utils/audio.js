let audioCtx = null;

const getAudioContext = () => {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const playStartupChime = () => {
  const ctx = getAudioContext();
  if (!ctx) return;
  
  const now = ctx.currentTime;
  const notes = [261.63, 329.63, 392.00, 493.88, 523.25]; // C4, E4, G4, B4, C5
  notes.forEach((freq, index) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now + index * 0.08);
    
    gain.gain.setValueAtTime(0, now + index * 0.08);
    gain.gain.linearRampToValueAtTime(0.12, now + index * 0.08 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.08 + 0.35);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start(now + index * 0.08);
    osc.stop(now + index * 0.08 + 0.4);
  });
};

export const playKeyClick = (isBackspace = false, isSpace = false) => {
  const ctx = getAudioContext();
  if (!ctx) return;
  
  const now = ctx.currentTime;
  
  // 1. High-frequency switch activation click
  const clickOsc = ctx.createOscillator();
  const clickGain = ctx.createGain();
  
  clickOsc.type = 'triangle';
  let clickFreq = 1200 + Math.random() * 300;
  if (isSpace) {
    clickFreq = 800 + Math.random() * 200;
  } else if (isBackspace) {
    clickFreq = 1000 + Math.random() * 200;
  }
  
  clickOsc.frequency.setValueAtTime(clickFreq, now);
  clickOsc.frequency.exponentialRampToValueAtTime(clickFreq * 0.4, now + 0.012);
  
  clickGain.gain.setValueAtTime(isSpace ? 0.18 : (isBackspace ? 0.12 : 0.14), now);
  clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);
  
  clickOsc.connect(clickGain);
  clickGain.connect(ctx.destination);
  
  // 2. Mid-low frequency keycap bottom-out sound ("thud" / "clack")
  const thudOsc = ctx.createOscillator();
  const thudGain = ctx.createGain();
  
  thudOsc.type = 'sine';
  let thudFreq = 220 + Math.random() * 25; // Normal keys around 220Hz
  if (isSpace) {
    thudFreq = 125 + Math.random() * 15; // Spacebar is much deeper
  } else if (isBackspace) {
    thudFreq = 180 + Math.random() * 20; // Backspace is slightly lower
  }
  
  thudOsc.frequency.setValueAtTime(thudFreq, now);
  thudOsc.frequency.exponentialRampToValueAtTime(thudFreq * 0.65, now + 0.035);
  
  thudGain.gain.setValueAtTime(isSpace ? 0.36 : (isBackspace ? 0.24 : 0.22), now);
  thudGain.gain.exponentialRampToValueAtTime(0.0001, now + (isSpace ? 0.07 : 0.045));
  
  thudOsc.connect(thudGain);
  thudGain.connect(ctx.destination);
  
  // 3. Friction & Stabilizer Rattle (bandpass filtered white noise burst)
  const duration = isSpace ? 0.06 : (isBackspace ? 0.04 : 0.025);
  const bufferSize = ctx.sampleRate * duration;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  
  const noiseNode = ctx.createBufferSource();
  noiseNode.buffer = buffer;
  
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(isSpace ? 1800 : (isBackspace ? 2400 : 3200), now);
  filter.Q.setValueAtTime(isSpace ? 1.5 : 2.5, now);
  
  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(isSpace ? 0.09 : (isBackspace ? 0.05 : 0.035), now);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  
  noiseNode.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(ctx.destination);
  
  // Start nodes
  clickOsc.start(now);
  clickOsc.stop(now + 0.02);
  
  thudOsc.start(now);
  thudOsc.stop(now + 0.08);
  
  noiseNode.start(now);
  noiseNode.stop(now + duration + 0.01);
};
 
export const playEnterClick = () => {
  const ctx = getAudioContext();
  if (!ctx) return;
  
  const now = ctx.currentTime;
  
  // 1. Lower pitch heavy triangle thud (represents large keycap size)
  const thudOsc = ctx.createOscillator();
  const thudGain = ctx.createGain();
  thudOsc.type = 'triangle';
  const thudFreq = 115 + Math.random() * 10;
  thudOsc.frequency.setValueAtTime(thudFreq, now);
  thudOsc.frequency.exponentialRampToValueAtTime(thudFreq * 0.6, now + 0.07);
  
  thudGain.gain.setValueAtTime(0.42, now);
  thudGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
  
  thudOsc.connect(thudGain);
  thudGain.connect(ctx.destination);
  
  // 2. High-frequency stabilizer click
  const clickOsc = ctx.createOscillator();
  const clickGain = ctx.createGain();
  clickOsc.type = 'triangle';
  clickOsc.frequency.setValueAtTime(950, now);
  clickOsc.frequency.exponentialRampToValueAtTime(350, now + 0.02);
  
  clickGain.gain.setValueAtTime(0.18, now);
  clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);
  
  clickOsc.connect(clickGain);
  clickGain.connect(ctx.destination);
  
  // 3. Stabilizer wire rattle noise
  const bufferSize = ctx.sampleRate * 0.08;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  
  const noiseNode = ctx.createBufferSource();
  noiseNode.buffer = buffer;
  
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(1500, now);
  filter.Q.setValueAtTime(1.2, now);
  
  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.10, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);
  
  noiseNode.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(ctx.destination);
  
  thudOsc.start(now);
  thudOsc.stop(now + 0.1);
  
  clickOsc.start(now);
  clickOsc.stop(now + 0.03);
  
  noiseNode.start(now);
  noiseNode.stop(now + 0.09);
};

export const resumeAudioContext = () => {
  const ctx = getAudioContext();
  if (ctx && ctx.state === 'suspended') {
    ctx.resume();
  }
};
