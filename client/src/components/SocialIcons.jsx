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
  alight-items: center;
  justify-self: right;

  font-size: 22px;
  padding-top: 15px;
  margin-right: 27.5%;
`;

const Circle = styled.a`
  background: ${({color}) => color};
  width: 45px;
  height: 45px;
  border-radius: 50%;;
  text-align: center;
`;

const SocialIcon = styled.i`
  color: white;
  font-size: 26px;
  padding-top: 10px;
`;

const SocialIcons = () => (
  <SocialIconsGrid>
    <Circle color="#06837A" href={FACEBOOK_URL} rel="noopener noreferrer" target="_blank">
      <SocialIcon className="fab fa-facebook-f" />
    </Circle>
    <Circle color="rgb(87, 11, 95)" href={TWITTER_URL} rel="noopener noreferrer" target="_blank">
      <SocialIcon className="fab fa-twitter" />
    </Circle>
    <Circle color="#06837A" href={INSTAGRAM_URL} rel="noopener noreferrer" target="_blank">
      <SocialIcon className="fab fa-instagram" />
    </Circle>
  </SocialIconsGrid>
)

export default SocialIcons;
