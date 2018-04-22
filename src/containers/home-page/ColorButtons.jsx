import React from 'react';
import './ColorButtons.css';
import ColorButton from '../../components/color-button/ColorButton';
import { HomeContext } from '../../state/HomeProvider';
import { canvasColors } from '../../constants/canvas-colors';

const twelthRootOfTwo = 2 ** (1 / 12);

export default class ColorButtons extends React.Component {
  state = {
    purple: {
      className: 'color-button-purple'
    },
    orange: {
      className: 'color-button-orange'
    },
    pink: {
      className: 'color-button-pink'
    },
    red: {
      className: 'color-button-red'
    },
    green: {
      className: 'color-button-green'
    },
    blue: {
      className: 'color-button-blue'
    }
  };

  order = [1, 2, 3, 4, 5, 6];
  seq = [];

  // audioContext = new AudioContext();
  audioContext = new (window.AudioContext || window.webkitAudioContext)();

  render() {
    return (
      <HomeContext.Consumer>
        {context => (
          <div className="color-buttons-container">
            <div className="color-buttons-row">
              <ColorButton className={this.state.purple.className} onClick={this.getClickEvent(context, canvasColors.purple, 1, 523.25)} />
              <ColorButton className={this.state.orange.className} onClick={this.getClickEvent(context, canvasColors.orange, 2, 659.25)} />
              <ColorButton className={this.state.pink.className} onClick={this.getClickEvent(context, canvasColors.pink, 3, 783.99)} />
            </div>
            <div className="color-buttons-row">
              <ColorButton className={this.state.red.className} onClick={this.getClickEvent(context, canvasColors.red, 4, 493.88)} />
              <ColorButton className={this.state.green.className} onClick={this.getClickEvent(context, canvasColors.green, 5, 587.33)} />
              <ColorButton className={this.state.blue.className} onClick={this.getClickEvent(context, canvasColors.blue, 6, 698.46)} />
            </div>
          </div>
        )}
      </HomeContext.Consumer>
    );
  }

  getClickEvent = (ctx, color, index, freq) => () => {
    ctx.changeColor(color);
    this.playDing(freq);
    this.checkClickSequence(index);

    if (this.seq.length === 6) {
      ctx.toggleBarcode(false);
      this.seq = [];
    } else ctx.toggleBarcode(true);
  };

  checkClickSequence(index) {
    const isCorrect = this.order[this.seq.length] === index;

    if (isCorrect) this.seq.push(index);
    else this.seq = [];
  }

  playDing(freq) {
    const now = this.audioContext.currentTime;
    const { oscNode, gainNode } = this.getAudio(freq, now);

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.02, now + 0.001);
    gainNode.gain.linearRampToValueAtTime(0.003, now + 0.5);
    gainNode.gain.linearRampToValueAtTime(0, now + 1);

    oscNode.start();
  }

  getAudio(freq, now) {
    const oscNode = this.getOscNode();
    const gainNode = this.getGainNode();

    oscNode.frequency.setValueAtTime(freq, now);
    gainNode.connect(this.audioContext.destination);
    oscNode.connect(gainNode);

    return { gainNode, oscNode };
  }

  getOscNode() {
    const oscNode = this.audioContext.createOscillator();

    oscNode.type = 'square';

    return oscNode;
  }

  getGainNode() {
    const gainNode = this.audioContext.createGain();

    gainNode.connect(this.audioContext.destination);

    return gainNode;
  }
}
