import React from 'react';
import { canvasColors } from '../constants/canvas-colors';

export const HomeContext = React.createContext();

export default class HomeProvider extends React.Component {
  state = {
    color: canvasColors.blue,
    showBarcode: true
  };

  render() {
    return (
      <HomeContext.Provider
        value={{
          color: this.state.color,
          changeColor: c => this.setState({ color: c }),
          showBarcode: this.state.showBarcode,
          toggleBarcode: v => this.setState({ showBarcode: v })
        }}
      >
        {this.props.children}
      </HomeContext.Provider>
    );
  }
}
