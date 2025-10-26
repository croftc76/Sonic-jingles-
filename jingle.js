// NES Startup Jingle - Alternate Version (Cut due to storage constraints)
// This jingle emulates the NES sound chip (2A03) characteristics

class NESJingle {
    constructor() {
        this.audioContext = null;
        this.isPlaying = false;
    }

    // Initialize Audio Context (must be done after user interaction)
    initAudio() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        return this.audioContext;
    }

    // Create an NES-style square wave note (pulse channel)
    playSquareNote(frequency, startTime, duration, dutyCycle = 0.5) {
        const ctx = this.audioContext;

        // Oscillator for the square wave
        const oscillator = ctx.createOscillator();
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(frequency, startTime);

        // Create a custom wave for different duty cycles (NES had 12.5%, 25%, 50%, 75%)
        const real = new Float32Array(2);
        const imag = new Float32Array(2);
        real[0] = 0;
        imag[0] = 0;
        real[1] = dutyCycle;
        imag[1] = dutyCycle;

        // Envelope for authentic NES sound
        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.15, startTime + 0.01); // Quick attack
        gainNode.gain.setValueAtTime(0.15, startTime + duration - 0.05);
        gainNode.gain.linearRampToValueAtTime(0, startTime + duration); // Quick release

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.start(startTime);
        oscillator.stop(startTime + duration);

        return oscillator;
    }

    // Create an NES-style triangle wave note (bass channel)
    playTriangleNote(frequency, startTime, duration) {
        const ctx = this.audioContext;

        const oscillator = ctx.createOscillator();
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(frequency, startTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.1, startTime + 0.01);
        gainNode.gain.setValueAtTime(0.1, startTime + duration - 0.03);
        gainNode.gain.linearRampToValueAtTime(0, startTime + duration);

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.start(startTime);
        oscillator.stop(startTime + duration);

        return oscillator;
    }

    // Add a simple noise burst for percussion effect
    playNoise(startTime, duration) {
        const ctx = this.audioContext;

        const bufferSize = ctx.sampleRate * duration;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);

        // Generate white noise
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.05, startTime);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

        // Filter to make it sound more like NES noise channel
        const filter = ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(1000, startTime);

        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(ctx.destination);

        noise.start(startTime);

        return noise;
    }

    // Play the complete NES startup jingle
    play() {
        if (this.isPlaying) return;

        this.isPlaying = true;
        this.initAudio();

        const now = this.audioContext.currentTime;
        const tempo = 0.15; // Duration of each note

        // Note frequencies (using equal temperament)
        const notes = {
            'C4': 261.63,
            'D4': 293.66,
            'E4': 329.63,
            'F4': 349.23,
            'G4': 392.00,
            'A4': 440.00,
            'B4': 493.88,
            'C5': 523.25,
            'D5': 587.33,
            'E5': 659.25,
            'F5': 698.46,
            'G5': 783.99,
            'C3': 130.81,
            'E3': 164.81,
            'G3': 196.00,
            'C2': 65.41
        };

        // Melody sequence - Channel 1 (Square wave with 50% duty cycle)
        const melody1 = [
            { note: 'E4', time: 0, duration: tempo },
            { note: 'G4', time: tempo, duration: tempo },
            { note: 'C5', time: tempo * 2, duration: tempo },
            { note: 'E5', time: tempo * 3, duration: tempo * 1.5 },
            { note: 'G5', time: tempo * 4.5, duration: tempo * 0.5 },
            { note: 'E5', time: tempo * 5, duration: tempo },
            { note: 'C5', time: tempo * 6, duration: tempo * 2 }
        ];

        // Harmony - Channel 2 (Square wave with 25% duty cycle)
        const melody2 = [
            { note: 'C4', time: 0, duration: tempo },
            { note: 'E4', time: tempo, duration: tempo },
            { note: 'G4', time: tempo * 2, duration: tempo },
            { note: 'C5', time: tempo * 3, duration: tempo * 1.5 },
            { note: 'E5', time: tempo * 4.5, duration: tempo * 0.5 },
            { note: 'C5', time: tempo * 5, duration: tempo },
            { note: 'G4', time: tempo * 6, duration: tempo * 2 }
        ];

        // Bass line - Triangle wave
        const bass = [
            { note: 'C3', time: 0, duration: tempo * 2 },
            { note: 'E3', time: tempo * 2, duration: tempo * 2 },
            { note: 'G3', time: tempo * 4, duration: tempo * 2 },
            { note: 'C3', time: tempo * 6, duration: tempo * 2 }
        ];

        // Play melody channel 1
        melody1.forEach(({ note, time, duration }) => {
            this.playSquareNote(notes[note], now + time, duration, 0.5);
        });

        // Play melody channel 2 (harmony)
        melody2.forEach(({ note, time, duration }) => {
            this.playSquareNote(notes[note], now + time, duration, 0.25);
        });

        // Play bass line
        bass.forEach(({ note, time, duration }) => {
            this.playTriangleNote(notes[note], now + time, duration);
        });

        // Add percussion accents on key beats
        this.playNoise(now, 0.05);
        this.playNoise(now + tempo * 3, 0.05);
        this.playNoise(now + tempo * 6, 0.08);

        // Calculate total duration
        const totalDuration = tempo * 8;

        // Reset playing state after jingle completes
        setTimeout(() => {
            this.isPlaying = false;
        }, totalDuration * 1000);

        return totalDuration;
    }
}

// Initialize the jingle player
const nesJingle = new NESJingle();

// Get UI elements
const playButton = document.getElementById('playButton');
const statusText = document.getElementById('status');

// Add click handler to play button
playButton.addEventListener('click', () => {
    if (nesJingle.isPlaying) {
        statusText.textContent = 'Already playing...';
        return;
    }

    // Disable button while playing
    playButton.disabled = true;
    playButton.classList.add('playing');
    statusText.textContent = 'Playing startup jingle...';

    // Play the jingle
    const duration = nesJingle.play();

    // Re-enable button after jingle completes
    setTimeout(() => {
        playButton.disabled = false;
        playButton.classList.remove('playing');
        statusText.textContent = 'Jingle complete!';

        setTimeout(() => {
            statusText.textContent = '';
        }, 2000);
    }, duration * 1000);
});

// Show ready status when page loads
window.addEventListener('load', () => {
    statusText.textContent = 'Ready to play!';
    setTimeout(() => {
        statusText.textContent = '';
    }, 2000);
});
