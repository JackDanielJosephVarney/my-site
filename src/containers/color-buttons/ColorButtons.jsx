import React from 'react';
import './ColorButtons.css';
import ColorButton from '../../components/color-button/ColorButton';
import { CanvasColorContext } from '../../state/CanvasColorProvider';
import { canvasColors } from '../../constants/canvas-colors';

export default props => (
  <CanvasColorContext.Consumer>
    {context => (
      <React.Fragment>
        <div className="color-button-wrapper-red">
          <ColorButton cName="color-button-red" onClick={() => context.changeColor(canvasColors.red)} />
        </div>
        <div className="color-button-wrapper-green">
          <ColorButton cName="color-button-green" onClick={() => context.changeColor(canvasColors.green)} />
        </div>
        <div className="color-button-wrapper-blue">
          <ColorButton cName="color-button-blue" onClick={() => context.changeColor(canvasColors.blue)} />
        </div>
        <div className="color-button-wrapper-orange">
          <ColorButton cName="color-button-orange" onClick={() => context.changeColor(canvasColors.orange)} />
        </div>
        <div className="color-button-wrapper-pink">
          <ColorButton cName="color-button-pink" onClick={() => context.changeColor(canvasColors.pink)} />
        </div>
        <div className="color-button-wrapper-yellow">
          <ColorButton cName="color-button-yellow" onClick={() => context.changeColor(canvasColors.yellow)} />
        </div>
      </React.Fragment>
    )}
  </CanvasColorContext.Consumer>
);
