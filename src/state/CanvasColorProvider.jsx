import React from 'react';
import { canvasColors } from '../constants/canvas-colors';

export const CanvasColorContext = React.createContext();

export default class CanvasColorProvider extends React.Component {
  state = {
    color: canvasColors.pink
  };

  render() {
    return (
      <CanvasColorContext.Provider
        value={{
          color: this.state.color,
          changeColor: c =>
            this.setState({
              color: c
            })
        }}
      >
        {this.props.children}
      </CanvasColorContext.Provider>
    );
  }
}
