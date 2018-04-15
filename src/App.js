import React, { Component } from 'react';
import './App.css';
import CanvasBackground from './components/canvas-background/CanvasBackground';

class App extends Component {
  render() {
    return (
      <CanvasBackground>
        <div style={{ height: '400px', width: '200px' }} />
      </CanvasBackground>
    );
  }
}

export default App;
