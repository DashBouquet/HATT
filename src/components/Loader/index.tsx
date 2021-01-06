import React, { FC } from 'react';

import './styles.css';

export const Loader: FC = () => {
  return (
    <>
      <div className="bg"></div>
      <div className="content">
        <div className="circle">
          <span className="dot no1"></span>
          <span className="dot no2"></span>
          <span className="dot no3"></span>
          <span className="dot no4"></span>
          <span className="dot no5"></span>
          <span className="dot no6"></span>
          <span className="dot no7"></span>
          <span className="dot no8"></span>
          <span className="dot no9"></span>
          <span className="dot no10"></span>
          <span className="dot no11"></span>
          <span className="dot no12"></span>
          <span className="dot no13"></span>
          <span className="dot no14"></span>
          <span className="dot no15"></span>
        </div>
      </div>
    </>
  );
};
