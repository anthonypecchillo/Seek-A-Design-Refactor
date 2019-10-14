/*
 * Copyright 2019-present Seek-A-Design, LLC. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import SocialIcons from './SocialIcons';
import UnderConstruction from './UnderConstruction';

const HomeGrid = styled.main`
  grid-area: main;
  grid-column: 2/3;
  grid-row: 2/3;

  display: grid;
  grid-template-rows: 13fr 2fr;
  grid-template-areas: "homecontent"
                       "footer"
`;

const HomeContent = styled.div`
  grid-area: homecontent;
  display: grid;
  
  background-color: lightgreen;
`;

const Home = () => (
  <HomeGrid>
    <HomeContent>
      <div>Home Content</div>
      <UnderConstruction />
    </HomeContent>
    <Footer>
      <SocialIcons>Social Icons</SocialIcons>
    </Footer>
  </HomeGrid>
);

export default Home;
