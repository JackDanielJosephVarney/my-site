import React from 'react';
import './HomePage.css';
import HomePageBackground from './HomePageBackground';
import HomePageMask from './HomePageMask';
import HomeProvider, { HomeProviderContext } from '../../state/HomeProvider';
import ColorButtons from '../color-buttons/ColorButtons';

export default class LandingPage extends React.Component {
  render() {
    return (
      <HomeProvider>
        <div className="home-page-wrapper">
          <HomeProviderContext.Consumer>
            {context => <HomePageBackground color={context.color} />}
          </HomeProviderContext.Consumer>
          <HomePageMask />
          <div className="content-container">
            <ColorButtons />
          </div>
        </div>
      </HomeProvider>
    );
  }
}
