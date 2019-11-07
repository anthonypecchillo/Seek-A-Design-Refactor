/*
 * Copyright 2019-present Seek-A-Design, LLC. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const FACEBOOK_URL = 'https://www.facebook.com/SeekADesign/';
const INSTAGRAM_URL = 'https://www.instagram.com/seekadesign/';
const TWITTER_URL = 'https://twitter.com/SeekADesignNY';

const SocialIconsGrid = styled.div`
  grid-area: socialicons;

  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 10%;
  align-items: start;
  justify-items: center;
  justify-self: center;

  font-size: 22px;
  margin-right: ${({big}) => big ? '0' : '27.5%'};
  padding-top: ${({big}) => big ? '0' : '5px'};
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Circle = styled.a`
  background: ${({color}) => color};
  width: ${({big}) => big ? '76px' : '45px'};
  height: ${({big}) => big ? '76px' : '45px'};
  border-radius: 50%;
  text-align: center;
`;

const SocialIcon = styled.i`
  color: white;
  font-size: ${({big}) => big ? '48px' : '26px'};
  padding-top: ${({big}) => big ? '15px' : '10px'};
`;

const SocialIcons = ({ big }) => (
  <SocialIconsGrid big={big}>
    <Circle color="#06837A" href={FACEBOOK_URL} rel="noopener noreferrer" target="_blank" big={big}>
      <SocialIcon className="fab fa-facebook-f" big={big} />
    </Circle>
    <Circle color="rgb(87, 11, 95)" href={TWITTER_URL} rel="noopener noreferrer" target="_blank" big={big}>
      <SocialIcon className="fab fa-twitter" big={big} />
    </Circle>
    <Circle color="#06837A" href={INSTAGRAM_URL} rel="noopener noreferrer" target="_blank" big={big}>
      <SocialIcon className="fab fa-instagram" big={big} />
    </Circle>
  </SocialIconsGrid>
);

export default SocialIcons;
