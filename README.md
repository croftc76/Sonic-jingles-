# NES Startup Jingle - Alternate Version

A hypothetical startup jingle for the Nintendo Entertainment System (NES) that was supposedly cut due to storage constraints.

## About

This project recreates what could have been an alternate boot sequence for the NES. In reality, the NES had no startup sound, partly due to its extremely limited storage (only 2KB of RAM!). This jingle imagines what might have been if Nintendo had implemented a startup sound similar to later consoles.

## Features

- Authentic NES sound chip emulation using Web Audio API
- Uses the characteristic sound channels of the NES 2A03 chip:
  - Two square wave (pulse) channels for melody
  - One triangle wave channel for bass
  - Noise channel for percussion accents
- Retro-styled interface with NES aesthetics
- Simple play button to trigger the jingle

## Technical Details

The jingle emulates the NES sound characteristics:

- **Square Waves**: Two channels with different duty cycles (50% and 25%) create the melodic lines
- **Triangle Wave**: Provides the bass line
- **Noise Channel**: Adds percussive accents at key moments
- **Duration**: ~1.2 seconds (very brief, as storage was precious!)
- **Musical Key**: C Major ascending arpeggio pattern

## Usage

1. Open `index.html` in a modern web browser
2. Click the "PLAY JINGLE" button
3. Enjoy the hypothetical NES startup sound!

## Browser Support

Works in all modern browsers that support the Web Audio API:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Why Was It "Cut"?

This is a fictional scenario, but the reasoning is historically accurate. The NES had severe storage limitations:
- Only 2KB of internal RAM
- Cartridges typically started at 32KB total
- Every byte counted for gameplay code and graphics
- A startup sound would have required precious ROM space
- Nintendo opted for silence to maximize space for games

Later Nintendo consoles (GameCube, Wii, Switch) famously have startup jingles, but the NES era was too constrained for such luxuries.

## Files

- `index.html` - Main HTML structure
- `style.css` - Retro NES-inspired styling
- `jingle.js` - Web Audio API implementation of the NES sound chip

## License

This is a creative project for educational and entertainment purposes.

---

Generated with Claude Code
