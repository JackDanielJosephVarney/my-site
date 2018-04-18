import React from 'react';
import './HomePage.css';
import HomePageBackground from './HomePageBackground';
import HomePageMask from './HomePageMask';
import CanvasColorProvider, { CanvasColorContext } from '../../state/CanvasColorProvider';
import ColorButtons from '../color-buttons/ColorButtons';

export default class LandingPage extends React.Component {
  render() {
    return (
      <CanvasColorProvider>
        <div className="home-page-wrapper">
          <CanvasColorContext.Consumer>
            {context => <HomePageBackground color={context.color} />}
          </CanvasColorContext.Consumer>
          <HomePageMask />
          <div className="content-container">
            <ColorButtons />
          </div>
        </div>
      </CanvasColorProvider>
    );
  }
}
