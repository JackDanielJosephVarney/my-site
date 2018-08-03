import React from 'react';
import './HomePage.css';
import HomePageMask from './HomePageMask';
import HomeProvider from '../../state/HomeProvider';
import ColorButtons from './ColorButtons';

export default class LandingPage extends React.Component {
  render() {
    return (
      <HomeProvider>
        <div className="home-page-wrapper">
          <HomePageMask />
          <div className="content-container">
            <ColorButtons />
          </div>
        </div>
      </HomeProvider>
    );
  }
}
