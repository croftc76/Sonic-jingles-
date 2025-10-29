# Retro Console Startup Jingles

Hypothetical startup jingles for classic 8-bit consoles that never had them!

## About

This project features two imaginary startup sequences for legendary 8-bit consoles:

### NES - Nintendo Entertainment System
A hypothetical alternate boot sequence for the NES. In reality, the NES had no startup sound, partly due to its extremely limited storage (only 2KB of RAM!). This jingle imagines what might have been if Nintendo had implemented a startup sound similar to later consoles.

### Master System - SEGA
An epic startup jingle for the Sega Master System featuring a catchy melody, a surprising key change from C Major to E Major, and triumphant SEGA-inspired chord progressions. The Master System also had no startup sound, but this imagines what could have been in the console wars!

## Features

### NES Jingle
- Authentic NES 2A03 sound chip emulation using Web Audio API
- Two square wave (pulse) channels for melody with different duty cycles
- Triangle wave channel for bass
- Noise channel for percussion accents
- Red Nintendo-themed interface
- Duration: ~1.2 seconds

### Master System Jingle
- Authentic SN76489 sound chip emulation
- Three square wave tone channels for rich harmonies
- Noise channel for percussion
- **Catchy ascending melody** that sticks in your head
- **Epic key change** from C Major to E Major (surprising yet satisfying!)
- **Triumphant SEGA-style chord progression** finale (E-A-B-E)
- Blue SEGA-themed interface with glowing effects
- Duration: ~2.5 seconds

## Technical Details

### NES (2A03 Chip)
- **Square Waves**: Two channels with different duty cycles (50% and 25%)
- **Triangle Wave**: Bass line
- **Noise Channel**: Percussive accents
- **Musical Key**: C Major ascending arpeggio
- Simple, memorable melody due to storage constraints

### Master System (SN76489 Chip)
- **3 Square Wave Channels**: Used for melody, harmony, and bass
- **1 Noise Channel**: Percussion and drum hits
- **Musical Structure**:
  - Part 1: Catchy melody in C Major (C-D-E-G-C pattern)
  - Transition: Brief connecting notes
  - Part 2: Same melody transposed to E Major (brighter, more triumphant!)
  - Finale: Epic chord progression (I-IV-V-I in E Major)
- **Key Change**: C Major → E Major (up a major third for maximum impact)
- **Chord Voicing**: Multiple octaves and thick harmonies for the SEGA finale
- All synthesis, no samples - period accurate!

## Usage

1. Open `index.html` in a modern web browser
2. Click the "PLAY JINGLE" button for the NES startup sound
3. Click the "PLAY MASTER SYSTEM" button for the epic SEGA jingle with key change
4. Enjoy the sounds these consoles never had!

## Browser Support

Works in all modern browsers that support the Web Audio API:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Why Did These Consoles Have No Startup Sounds?

This is a fictional scenario, but the reasoning is historically accurate:

### Storage Limitations
- **NES**: Only 2KB of internal RAM; cartridges typically started at 32KB total
- **Master System**: Similar constraints with 8KB RAM
- Every byte counted for gameplay code and graphics
- Startup sounds would have required precious ROM space in the console itself
- Both manufacturers opted for silence to keep costs down

### Historical Context
- Startup sounds became common with CD-based consoles (PlayStation, Saturn)
- Later consoles had dedicated system storage for boot sequences
- GameCube, Wii, Xbox, PS2, and Switch all feature memorable startup sounds
- The 8-bit era was too constrained for such luxuries

But imagine if they had tried! The Master System's catchy melody with that epic key change would have made SEGA legendary even earlier!

## Files

- `index.html` - Main HTML structure with both console interfaces
- `style.css` - Retro styling for both NES (red) and Master System (blue) themes
- `jingle.js` - Web Audio API implementations:
  - NES 2A03 chip emulation (square waves, triangle, noise)
  - Master System SN76489 chip emulation with key change and chord progressions

## License

This is a creative project for educational and entertainment purposes.

---

Generated with Claude Code
