/*
 * Copyright 2019-present Seek-A-Design, LLC. All Rights Reserved.
 */

import React from 'react';

import '../../dist/UnderConstruction.css';

const UnderConstruction = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="title">
          <h3><a href="http://www.seekadesign.com">Seek-A-Design.com</a> is currently...</h3>
        </div>
        <div className="animation">
         <div className="one spin-one"></div>
         <div className="two spin-two"></div>
         <div className="three spin-one"></div>
        </div>
      <h1>Under maintenance</h1>
      <br />
      <p>The engineers are building our new web site right now!</p>
      <br />
      <p>Please feel free to reach out to <a href="mailto:seekadesign@gmail.com">SeekADesign@gmail.com</a> for immediate assistance.</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
