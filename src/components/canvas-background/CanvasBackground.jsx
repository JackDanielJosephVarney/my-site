import React from 'react';
import styles from './CanvasBackground.css';

export default class CanvasBackground extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <div className="canvas-wrapper">
          <canvas ref={canvas => (this.canvas = canvas)} />
        </div>
        <div class="svg-mask">
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" x="0" y="0" mask="url(#text)" />
            <mask id="text">
              <rect width="100%" height="100%" fill="#fff" x="0" y="0" />
              <text x="50%" y="30%" fill="#000" text-anchor="middle">
                Welcome to
              </text>
              <text x="50%" y="50%" fill="#000" text-anchor="middle">
                jackvarney.co.uk
              </text>
              <text x="50%" y="70%" fill="#000" text-anchor="middle">
                Enjoy your stay.
              </text>
            </mask>
          </svg>
        </div>
        <div className="app-container">{this.props.children}</div>
      </div>
    );
  }

  componentDidMount() {
    const ctx = this.canvas.getContext('2d');
    this.addWindowEventListener(ctx);
    this.setCanvasSize();
    this.setDrawInterval(ctx);
  }

  addWindowEventListener(ctx) {
    window.addEventListener('resize', () => {
      this.setCanvasSize();
      this.drawHexagons(ctx);
    });
  }

  setCanvasSize() {
    this.canvas.setAttribute('width', window.innerWidth);
    this.canvas.setAttribute('height', window.innerHeight / 5);
  }

  setDrawInterval(ctx) {
    this.drawHexagons(ctx);
    let interval = setInterval(() => this.drawHexagons(ctx), 75);
  }

  drawHexagons(ctx) {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    let size;
    const w = window.innerWidth;

    switch (true) {
      case w < 480:
        size = 2;
        break;
      case w < 600:
        size = 2.5;
        break;
      case w < 960:
        size = 3;
        break;
      case w < 1280:
        size = 4;
        break;
      case w < 1920:
        size = 5;
        break;
      default:
        size = 6;
    }

    for (let yPos = 0; yPos < this.canvas.clientHeight; yPos += this.getRnd(15)) {
      for (let xPos = 0; xPos < this.canvas.clientWidth; xPos += this.getRnd(15)) {
        ctx.beginPath();
        ctx.moveTo(xPos, yPos);

        for (let side = 0; side < 8; side++) {
          ctx.lineTo(xPos + size * Math.cos(side * Math.PI / 3), yPos + size * Math.sin(side * Math.PI / 3));
        }

        ctx.fillStyle = this.getFillColour();
        ctx.fill();
      }
    }
  }

  getFillColour() {
    switch (Math.ceil(Math.random() * 3)) {
      case 1:
      case 2:
        return '#ffffff';
      case 3:
        return '#F44336';
    }
  }

  getRnd(num) {
    return num + Math.random() * 5;
  }
}
