import React from 'react';
import './ColorButtons.css';
import ColorButton from '../../components/color-button/ColorButton';
import { HomeProviderContext } from '../../state/HomeProvider';
import { canvasColors } from '../../constants/canvas-colors';

export default class ColorButtons extends React.Component {
  order = [1, 2, 3, 4, 5, 6];
  seq = [];

  render() {
    return (
      <HomeProviderContext.Consumer>
        {context => (
          <React.Fragment>
            <div className="color-button-wrapper-red">
              <ColorButton cName="color-button-red" onClick={this.getClickEvent(context, canvasColors.red, 1)} />
            </div>
            <div className="color-button-wrapper-green">
              <ColorButton cName="color-button-green" onClick={this.getClickEvent(context, canvasColors.green, 2)} />
            </div>
            <div className="color-button-wrapper-blue">
              <ColorButton cName="color-button-blue" onClick={this.getClickEvent(context, canvasColors.blue, 3)} />
            </div>
            <div className="color-button-wrapper-orange">
              <ColorButton cName="color-button-orange" onClick={this.getClickEvent(context, canvasColors.orange, 4)} />
            </div>
            <div className="color-button-wrapper-pink">
              <ColorButton cName="color-button-pink" onClick={this.getClickEvent(context, canvasColors.pink, 5)} />
            </div>
            <div className="color-button-wrapper-yellow">
              <ColorButton cName="color-button-yellow" onClick={this.getClickEvent(context, canvasColors.yellow, 6)} />
            </div>
          </React.Fragment>
        )}
      </HomeProviderContext.Consumer>
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
