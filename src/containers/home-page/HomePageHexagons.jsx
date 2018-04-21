import React from 'react';

export default class HomePageHexagons extends React.Component {
  currentColor;

  render() {
    return <canvas ref={canvas => (this.canvas = canvas)} />;
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    this.addWindowEventListener();
    this.setCanvasSize();
    this.setDrawInterval();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    window.removeEventListener('resize', this.windowEventListener);
  }

  addWindowEventListener() {
    window.addEventListener('resize', this.windowEventListener);
  }

  windowEventListener = () => {
    this.setCanvasSize();
    this.drawHexagons();
  };

  setCanvasSize() {
    this.canvas.setAttribute('width', window.innerWidth);
    this.canvas.setAttribute('height', window.innerHeight / 7);
  }

  setDrawInterval() {
    this.drawHexagons();
    this.interval = setInterval(() => this.drawHexagons(), 120);
  }

  drawHexagons() {
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const size = this.getHexagonSize();

    let y = 15;
    let x = 15;
    if (window.innerWidth < 960) (y = 4), (x = 5);

    for (let yPos = 0; yPos < this.canvas.clientHeight; yPos += this.getRnd(y)) {
      for (let xPos = 0; xPos < this.canvas.clientWidth; xPos += this.getRnd(x)) {
        this.ctx.beginPath();
        this.ctx.moveTo(xPos, yPos);

        for (let side = 0; side < 8; side++) {
          this.ctx.lineTo(xPos + size * Math.cos(side * Math.PI / 3), yPos + size * Math.sin(side * Math.PI / 3));
        }

        this.ctx.fillStyle = this.getFillColour();
        this.ctx.fill();
      }
    }
  }

  drawHexagons(yPos = 0, xPos = 0) {
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const size = this.getHexagonSize();

    let y = 15;
    let x = 15;
    if (window.innerWidth < 960) (y = 4), (x = 5);

    for (let yPos = 0; yPos < this.canvas.clientHeight; yPos += this.getRnd(y)) {
      for (let xPos = 0; xPos < this.canvas.clientWidth; xPos += this.getRnd(x)) {
        this.ctx.beginPath();
        this.ctx.moveTo(xPos, yPos);

        for (let side = 0; side < 8; side++) {
          this.ctx.lineTo(xPos + size * Math.cos(side * Math.PI / 3), yPos + size * Math.sin(side * Math.PI / 3));
        }

        this.ctx.fillStyle = this.getFillColour();
        this.ctx.fill();
      }
    }
  }

  getHexagonSize() {
    const w = window.innerWidth;
    switch (true) {
      case w < 600:
        return 2;
      case w < 1280:
        return 4;
      default:
        return 6;
    }
  }

  getFillColour() {
    switch (Math.ceil(Math.random() * 3)) {
      case 2:
        return this.currentColor === this.props.color ? '#ffffff' : this.currentColor;
      case 3:
        return this.props.color;
      default:
        return '#ffffff';
    }
  }

  getRnd(num, max = 5) {
    return num + Math.random() * max;
  }
}
