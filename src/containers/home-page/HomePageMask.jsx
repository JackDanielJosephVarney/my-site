import React from 'react';
import './HomePageMask.css';

export default class HomePageMask extends React.Component {
  hasAnimated = false;

  render() {
    return (
      <div className="svg-mask" onClick={this.animate.bind(this)}>
        <svg width="100%" height="100%">
          <Top getRef={this.getTopRef} />
          <Middle getRef={this.getMiddleRef} />
          <Bottom getRef={this.getBottomRef} />
          <rect ref={r => (this.r = r)} />
        </svg>
      </div>
    );
  }

  setClass = (ref, className = '') => ref.setAttribute('class', className);

  animate() {
    this.hasAnimated ? this.clearAll() : this.setAll();
  }

  animateSeq(func1, func2, func3) {
    func1();
    setTimeout(func2, 30);
    setTimeout(func3, 60);
  }

  clearAll() {
    this.animateSeq(
      () => this.setClass(this.topText),
      () => this.setClass(this.middleText),
      () => this.setClass(this.bottomText)
    );
    this.hasAnimated = false;
  }

  setAll() {
    this.animateSeq(
      () => this.setClass(this.topText, 'mouseover'),
      () => this.setClass(this.middleText, 'mouseover'),
      () => this.setClass(this.bottomText, 'mouseover')
    );
    this.hasAnimated = true;
  }

  getTopRef = ref => (this.topText = ref);
  getMiddleRef = ref => (this.middleText = ref);
  getBottomRef = ref => (this.bottomText = ref);
}

const Top = props => (
  <React.Fragment>
    <rect width="100%" height="25.1%" x="0" y="0%" stroke="#000" />
    <rect width="100%" height="11.1%" x="0" y="25%" mask="url(#top-text-mask)" stroke="#000" />
    <mask id="top-text-mask">
      <rect width="100%" height="11.1%" fill="#fff" x="0" y="25%" />
      <text id="top-text" ref={r => props.getRef(r)} x="50%" y="35%" textAnchor="middle">
        Welcome to
      </text>
    </mask>
    <rect width="100%" height="3.1%" x="0" y="36%" stroke="#000" />
  </React.Fragment>
);

const Middle = props => (
  <React.Fragment>
    <rect width="100%" height="15.1%" x="0" y="39%" mask="url(#middle-text-mask)" />
    <mask id="middle-text-mask">
      <rect width="100%" height="15.1%" fill="#fff" x="0" y="39%" />
      <text id="middle-text" ref={r => props.getRef(r)} x="50%" y="50%" textAnchor="middle">
        jackvarney.co.uk
      </text>
    </mask>
    <rect width="100%" height="1.1%" x="0" y="54%" stroke="#000" />
  </React.Fragment>
);

const Bottom = props => (
  <React.Fragment>
    <rect width="100%" height="13.1%" x="0" y="55%" mask="url(#bottom-text-mask)" />
    <mask id="bottom-text-mask">
      <rect width="100%" height="13.1%" fill="#fff" x="0" y="55%" />
      <text id="bottom-text" ref={r => props.getRef(r)} x="50%" y="65%" textAnchor="middle">
        enjoy the hexagons
      </text>
    </mask>
    <rect width="100%" height="32%" x="0" y="68%" stroke="#000" />
  </React.Fragment>
);
