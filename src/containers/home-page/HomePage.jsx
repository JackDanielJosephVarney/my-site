import React from 'react';
import './HomePage.css';
import HomePageBackground from './HomePageBackground';
import HomePageMask from './HomePageMask';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page-wrapper">
        <HomePageBackground>{}</HomePageBackground>
        <HomePageMask />
      </div>
    );
  }
}
