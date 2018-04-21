import React from 'react';
import './HomePageMask.css';
import { HomeContext } from '../../state/HomeProvider';
import HomePageHexagons from './HomePageHexagons';

export default props => (
  <HomeContext.Consumer>
    {context => {
      const maskClass = context.showBarcode ? '' : 'mouseover';
      return (
        <React.Fragment>
          <div className="svg-mask">
            <svg width="100%" height="100%">
              <SVGFiller height={25.1} y={0} />
              <TopMask className={maskClass} height={15.1} y={25} />
              <MiddleMask className={maskClass} height={15.1} y={40} />
              <BottomMask className={maskClass} height={15.1} y={55} />
              <SVGFiller height={30} y={70} />
            </svg>
          </div>
          <div className="canvas-wrapper">
            <HomePageHexagons color={context.color} />
          </div>
        </React.Fragment>
      );
    }}
  </HomeContext.Consumer>
);

const SVGFiller = props => <rect width="100%" height={`${props.height}%`} x="0" y={`${props.y}%`} stroke="#000" />;
const getPercent = num => num + '%';
const getTextY = (num, height) => getPercent(num + height - 2);

const TopMask = props => {
  const { height, y } = props;
  return (
    <React.Fragment>
      <rect width="100%" height={getPercent(height)} x="0" y={getPercent(y)} mask="url(#top-text-mask)" stroke="#000" />
      <mask id="top-text-mask">
        <rect width="100%" height={getPercent(height)} fill="#fff" x="0" y={getPercent(y)} />
        <text className={props.className} id="top-text" x="50%" y={getTextY(y, height)} textAnchor="middle">
          Welcome to
        </text>
      </mask>
    </React.Fragment>
  );
};

const MiddleMask = props => {
  const { height, y } = props;
  return (
    <React.Fragment>
      <rect width="100%" height={getPercent(height)} x="0" y={getPercent(y)} mask="url(#middle-text-mask)" />
      <mask id="middle-text-mask">
        <rect width="100%" height={getPercent(height)} fill="#fff" x="0" y={getPercent(y)} />
        <text className={props.className} id="middle-text" x="50%" y={getTextY(y, height)} textAnchor="middle">
          jackvarney.co.uk
        </text>
      </mask>
    </React.Fragment>
  );
};

const BottomMask = props => {
  const { height, y } = props;
  return (
    <React.Fragment>
      <rect width="100%" height={getPercent(height)} x="0" y={getPercent(y)} mask="url(#bottom-text-mask)" />
      <mask id="bottom-text-mask">
        <rect width="100%" height={getPercent(height)} fill="#fff" x="0" y={getPercent(y)} />
        <text className={props.className} id="bottom-text" x="50%" y={getTextY(y, height)} textAnchor="middle">
          enjoy the hexagons
        </text>
      </mask>
    </React.Fragment>
  );
};
