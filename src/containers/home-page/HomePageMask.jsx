import React from 'react';
import './HomePageMask.css';
import { HomeProviderContext } from '../../state/HomeProvider';

export default class HomePageMask extends React.Component {
  render() {
    return (
      <HomeProviderContext.Consumer>
        {context => (
          <div className="svg-mask">
            <svg width="100%" height="100%">
              <Top cName={this.getClass(context.showBarcode)} />
              <Middle cName={this.getClass(context.showBarcode)} />
              <Bottom cName={this.getClass(context.showBarcode)} />
            </svg>
          </div>
        )}
      </HomeProviderContext.Consumer>
    );
  }

  getClass(showBarcode) {
    return showBarcode ? '' : 'mouseover';
  }
}

class Top extends React.Component {
  render() {
    return (
      <React.Fragment>
        <rect width="100%" height="25.1%" x="0" y="0%" stroke="#000" />
        <rect width="100%" height="11.1%" x="0" y="25%" mask="url(#top-text-mask)" stroke="#000" />
        <mask id="top-text-mask">
          <rect width="100%" height="11.1%" fill="#fff" x="0" y="25%" />
          <text className={this.props.cName} id="top-text" x="50%" y="35%" textAnchor="middle">
            Welcome to
          </text>
        </mask>
        <rect width="100%" height="3.1%" x="0" y="36%" stroke="#000" />
      </React.Fragment>
    );
  }
}

class Middle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <rect width="100%" height="15.1%" x="0" y="39%" mask="url(#middle-text-mask)" />
        <mask id="middle-text-mask">
          <rect width="100%" height="15.1%" fill="#fff" x="0" y="39%" />
          <text className={this.props.cName} id="middle-text" x="50%" y="50%" textAnchor="middle">
            jackvarney.co.uk
          </text>
        </mask>
        <rect width="100%" height="1.1%" x="0" y="54%" stroke="#000" />
      </React.Fragment>
    );
  }
}

class Bottom extends React.Component {
  render() {
    return (
      <React.Fragment>
        <rect width="100%" height="13.1%" x="0" y="55%" mask="url(#bottom-text-mask)" />
        <mask id="bottom-text-mask">
          <rect width="100%" height="13.1%" fill="#fff" x="0" y="55%" />
          <text className={this.props.cName} id="bottom-text" x="50%" y="65%" textAnchor="middle">
            enjoy the hexagons
          </text>
        </mask>
        <rect width="100%" height="32%" x="0" y="68%" stroke="#000" />
      </React.Fragment>
    );
  }
}
