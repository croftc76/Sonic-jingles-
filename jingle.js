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

// ============================================================================
// Master System (SEGA) Startup Jingle
// ============================================================================
// This jingle emulates the SN76489 sound chip with a catchy melody,
// surprising key change, and triumphant SEGA-inspired chord progression

class MasterSystemJingle {
    constructor() {
        this.audioContext = null;
        this.isPlaying = false;
    }

    initAudio() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        return this.audioContext;
    }

    // SN76489 used square waves for its tone channels
    playSquareNote(frequency, startTime, duration, volume = 0.15) {
        const ctx = this.audioContext;

        const oscillator = ctx.createOscillator();
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(frequency, startTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.005); // Very quick attack
        gainNode.gain.setValueAtTime(volume, startTime + duration - 0.02);
        gainNode.gain.linearRampToValueAtTime(0, startTime + duration);

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.start(startTime);
        oscillator.stop(startTime + duration);

        return oscillator;
    }

    // Play a chord (multiple notes simultaneously)
    playChord(frequencies, startTime, duration, volume = 0.12) {
        frequencies.forEach(freq => {
            this.playSquareNote(freq, startTime, duration, volume);
        });
    }

    // Noise channel for percussion
    playNoise(startTime, duration, volume = 0.08) {
        const ctx = this.audioContext;

        const bufferSize = ctx.sampleRate * duration;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(volume, startTime);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(2000, startTime);
        filter.Q.setValueAtTime(1, startTime);

        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(ctx.destination);

        noise.start(startTime);

        return noise;
    }

    play() {
        if (this.isPlaying) return;

        this.isPlaying = true;
        this.initAudio();

        const now = this.audioContext.currentTime;
        const beat = 0.18; // Tempo

        // Extended note frequencies
        const notes = {
            // C Major scale
            'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23,
            'G4': 392.00, 'A4': 440.00, 'B4': 493.88, 'C5': 523.25,
            'D5': 587.33, 'E5': 659.25, 'F5': 698.46, 'G5': 783.99,
            'A5': 880.00, 'C6': 1046.50,
            // E Major scale (for key change)
            'E3': 164.81, 'F#3': 185.00, 'G#3': 207.65, 'A3': 220.00,
            'B3': 246.94, 'C#4': 277.18, 'D#4': 311.13, 'F#4': 369.99,
            'G#4': 415.30, 'A#4': 466.16, 'B5': 987.77, 'C#5': 554.37,
            'D#5': 622.25, 'E6': 1318.51, 'G#5': 830.61,
            // Bass notes
            'C3': 130.81, 'G3': 196.00, 'C2': 65.41, 'E2': 82.41
        };

        let time = 0;

        // ===== PART 1: CATCHY OPENING MELODY IN C MAJOR =====

        // Main melody - Channel 1 (catchy ascending pattern)
        const melody1 = [
            { note: 'C4', time: 0, duration: beat * 0.5 },
            { note: 'D4', time: beat * 0.5, duration: beat * 0.5 },
            { note: 'E4', time: beat * 1, duration: beat * 0.5 },
            { note: 'G4', time: beat * 1.5, duration: beat * 0.5 },
            { note: 'C5', time: beat * 2, duration: beat * 1.5 }, // Hold this note
        ];

        // Harmony - Channel 2
        const harmony1 = [
            { note: 'E4', time: 0, duration: beat * 0.5 },
            { note: 'F4', time: beat * 0.5, duration: beat * 0.5 },
            { note: 'G4', time: beat * 1, duration: beat * 0.5 },
            { note: 'C5', time: beat * 1.5, duration: beat * 0.5 },
            { note: 'E5', time: beat * 2, duration: beat * 1.5 },
        ];

        // Bass - Channel 3
        const bass1 = [
            { note: 'C3', time: 0, duration: beat * 2 },
            { note: 'C3', time: beat * 2, duration: beat * 1.5 },
        ];

        // Play Part 1
        melody1.forEach(({ note, time: t, duration }) => {
            this.playSquareNote(notes[note], now + t, duration, 0.16);
        });
        harmony1.forEach(({ note, time: t, duration }) => {
            this.playSquareNote(notes[note], now + t, duration, 0.12);
        });
        bass1.forEach(({ note, time: t, duration }) => {
            this.playSquareNote(notes[note], now + t, duration, 0.14);
        });

        // Percussion on beats
        this.playNoise(now, 0.03, 0.1);
        this.playNoise(now + beat * 2, 0.03, 0.1);

        time = beat * 3.5;

        // ===== KEY CHANGE TRANSITION =====
        // Brief pause then transition note
        const transition = beat * 0.5;
        this.playSquareNote(notes['B4'], now + time, transition, 0.15);
        this.playSquareNote(notes['D5'], now + time, transition, 0.12);
        time += transition;

        // ===== PART 2: SAME MELODY IN E MAJOR (SURPRISING KEY CHANGE!) =====

        // Main melody in E major - brighter and more triumphant!
        const melody2 = [
            { note: 'E4', time: time, duration: beat * 0.5 },
            { note: 'F#4', time: time + beat * 0.5, duration: beat * 0.5 },
            { note: 'G#4', time: time + beat * 1, duration: beat * 0.5 },
            { note: 'B4', time: time + beat * 1.5, duration: beat * 0.5 },
            { note: 'E5', time: time + beat * 2, duration: beat * 1.5 },
        ];

        const harmony2 = [
            { note: 'G#4', time: time, duration: beat * 0.5 },
            { note: 'A4', time: time + beat * 0.5, duration: beat * 0.5 },
            { note: 'B4', time: time + beat * 1, duration: beat * 0.5 },
            { note: 'E5', time: time + beat * 1.5, duration: beat * 0.5 },
            { note: 'G#5', time: time + beat * 2, duration: beat * 1.5 },
        ];

        const bass2 = [
            { note: 'E3', time: time, duration: beat * 2 },
            { note: 'E3', time: time + beat * 2, duration: beat * 1.5 },
        ];

        // Play Part 2 (E major)
        melody2.forEach(({ note, time: t, duration }) => {
            this.playSquareNote(notes[note], now + t, duration, 0.17);
        });
        harmony2.forEach(({ note, time: t, duration }) => {
            this.playSquareNote(notes[note], now + t, duration, 0.13);
        });
        bass2.forEach(({ note, time: t, duration }) => {
            this.playSquareNote(notes[note], now + t, duration, 0.15);
        });

        // More prominent percussion in part 2
        this.playNoise(now + time, 0.03, 0.12);
        this.playNoise(now + time + beat * 2, 0.03, 0.12);

        time += beat * 3.5;

        // ===== EPIC SEGA-STYLE CHORD PROGRESSION FINALE =====

        // Chord 1: E Major chord (E-G#-B)
        const chord1Time = now + time;
        this.playChord([notes['E4'], notes['G#4'], notes['B4']], chord1Time, beat * 1, 0.13);
        this.playSquareNote(notes['E3'], chord1Time, beat * 1, 0.15);
        this.playNoise(chord1Time, 0.05, 0.15);

        time += beat * 1;

        // Chord 2: A Major chord (A-C#-E) - creates tension
        const chord2Time = now + time;
        this.playChord([notes['A4'], notes['C#5'], notes['E5']], chord2Time, beat * 1, 0.13);
        this.playSquareNote(notes['A3'], chord2Time, beat * 1, 0.15);
        this.playNoise(chord2Time, 0.05, 0.15);

        time += beat * 1;

        // Chord 3: B Major chord (B-D#-F#) - more tension
        const chord3Time = now + time;
        this.playChord([notes['B4'], notes['D#5'], notes['F#4']], chord3Time, beat * 1, 0.13);
        this.playSquareNote(notes['B3'], chord3Time, beat * 1, 0.15);
        this.playNoise(chord3Time, 0.05, 0.15);

        time += beat * 1;

        // FINAL CHORD: Big E Major with octave doubling for maximum impact!
        const finalTime = now + time;
        this.playChord([
            notes['E4'],
            notes['G#4'],
            notes['B4'],
            notes['E5'],
            notes['G#5']
        ], finalTime, beat * 2.5, 0.14);
        this.playSquareNote(notes['E3'], finalTime, beat * 2.5, 0.16);
        this.playSquareNote(notes['E2'], finalTime, beat * 2.5, 0.12); // Sub bass!

        // Epic final drum hit
        this.playNoise(finalTime, 0.1, 0.2);

        time += beat * 2.5;

        // Calculate total duration
        const totalDuration = time;

        // Reset playing state
        setTimeout(() => {
            this.isPlaying = false;
        }, totalDuration * 1000);

        return totalDuration;
    }
}

// Initialize Master System jingle
const smsJingle = new MasterSystemJingle();

// Get Master System UI elements
const playButtonSMS = document.getElementById('playButtonSMS');
const statusTextSMS = document.getElementById('statusSMS');

// Add click handler for Master System
playButtonSMS.addEventListener('click', () => {
    if (smsJingle.isPlaying) {
        statusTextSMS.textContent = 'Already playing...';
        return;
    }

    playButtonSMS.disabled = true;
    playButtonSMS.classList.add('playing');
    statusTextSMS.textContent = 'Playing Master System jingle...';

    const duration = smsJingle.play();

    setTimeout(() => {
        playButtonSMS.disabled = false;
        playButtonSMS.classList.remove('playing');
        statusTextSMS.textContent = 'SEGA!';

        setTimeout(() => {
            statusTextSMS.textContent = '';
        }, 2000);
    }, duration * 1000);
});
