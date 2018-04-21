import React from 'react';
import './ColorButtons.css';
import ColorButton from '../../components/color-button/ColorButton';
import { HomeContext } from '../../state/HomeProvider';
import { canvasColors } from '../../constants/canvas-colors';

export default class ColorButtons extends React.Component {
  state = {
    purple: {
      key: 1,
      className: 'color-button-purple'
    },
    orange: {
      key: 2,
      className: 'color-button-orange'
    },
    pink: {
      key: 3,
      className: 'color-button-pink'
    },
    red: {
      key: 4,
      className: 'color-button-red'
    },
    green: {
      key: 5,
      className: 'color-button-green'
    },
    blue: {
      key: 6,
      className: 'color-button-blue'
    }
  };

  order = [1, 2, 3, 4, 5, 6];
  seq = [];

  render() {
    return (
      <HomeContext.Consumer>
        {context => (
          <div className="color-buttons-container">
            <div className="color-buttons-row">
              <ColorButton
                className={this.state.purple.className}
                onClick={this.getClickEvent(context, canvasColors.purple, this.state.purple.key)}
              />
              <ColorButton
                className={this.state.orange.className}
                onClick={this.getClickEvent(context, canvasColors.orange, this.state.orange.key)}
              />
              <ColorButton
                className={this.state.pink.className}
                onClick={this.getClickEvent(context, canvasColors.pink, this.state.pink.key)}
              />
            </div>
            <div className="color-buttons-row">
              <ColorButton
                className={this.state.red.className}
                onClick={this.getClickEvent(context, canvasColors.red, this.state.red.key)}
              />
              <ColorButton
                className={this.state.green.className}
                onClick={this.getClickEvent(context, canvasColors.green, this.state.green.key)}
              />
              <ColorButton
                className={this.state.blue.className}
                onClick={this.getClickEvent(context, canvasColors.blue, this.state.blue.key)}
              />
            </div>
          </div>
        )}
      </HomeContext.Consumer>
    );
  }

  getClickEvent = (ctx, color, num) => () => {
    ctx.changeColor(color);
    this.checkClickSequence(num);

    if (this.seq.length === 6) {
      ctx.toggleBarcode(false);
      this.seq = [];
    } else ctx.toggleBarcode(true);
  };

  checkClickSequence(num) {
    const isCorrect = this.order[this.seq.length] === num;

    if (isCorrect) this.seq.push(num);
    else this.seq = [];
  }
}
