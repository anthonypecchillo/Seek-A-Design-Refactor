/*
 * Copyright 2019-present Seek-A-Design, LLC. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import SocialIcons from './SocialIcons';

import SlideOneURL from '../../dist/assets/images/8.jpg';
// import SlideTwoURL from '../../dist/assets/images/12.jpg';
// import SlideThreeURL from '../../dist/assets/images/13.jpg';

const HomeGrid = styled.main`
  grid-area: main;
  grid-column: 2/3;
  grid-row: 2/3;

  display: grid;
  grid-template-rows: 13fr 2fr;
  grid-template-areas: "homecontent"
                       "footer";
`;

const HomeContent = styled.div`
  grid-area: homecontent;

  display: grid;
  grid-template-columns: 57.3fr 42.7fr;
  /* grid-template-areas:  "contact-title contact-form-title"
                       "contact-address contact-form"
                       "contact-social contact-form"; */
  justify-items: center;

  background-color: rgb(227, 227, 226);
  border: 7px solid #06837A;
  height: 607.5px;
  width: 100%;
`;

const CarouselImage = styled.div`
  /* grid-area: logo; */
  /* grid-column: 1/2; */

  /* place-self: center; */

  background: no-repeat center/120% url(${SlideOneURL});
  height: 100%;
  /* min-width: 140px; */
  width: 100%;
`;

const CarouselRightContainer = styled.div`
  height: 100%;
  padding: 13% 8.33%;
  text-align: center;
  width: 100%;
`;

const CarouselTitle = styled.h1`
  /* grid-area: reviews-title;
  grid-column: 2/3;
  grid-row: 1/2; */

  color: #570b5f;
  text-align: center;
  font-family: ChandelleDisplay;
`;

const CarouselDescription = styled.div`
  color: #570b5f;
  font-family: AlexandriaFLF;
  font-size: 22px;
  text-align: center;
`;

const CarouselDots = styled.ol`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
  text-align: center;

  /* @media (min-width: 766px) {
    display: none;
  } */
`;

const CarouselDot = styled.li`
  background-color: ${({active}) => active ? '#570b5f' : '#898a89'}
  border-radius: 50%;
  display: inline-block;
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin: 0 4px;

  /* @media (min-width: 766px) {
    display: none;
  } */
`;

const Home = () => (
  <HomeGrid>
    <HomeContent>
      <CarouselImage />
      <CarouselRightContainer>
        <CarouselTitle>Seeking-A-Design?<br/>You came to the<br/>right place!</CarouselTitle>
        <CarouselDescription>The world is yours when you work with Seek-A-Design! Getting married? Celebrating a special occasion? Opening a business and need some marketing supplies? Seek-A-Design is a one-stop-shop for all your design and printing needs! Come take a look!</CarouselDescription>
        <CarouselDots>
          <CarouselDot active />
          <CarouselDot />
          <CarouselDot />
          <CarouselDot />
          <CarouselDot />
        </CarouselDots>
      </CarouselRightContainer>
    </HomeContent>
    <Footer>
      <SocialIcons />
    </Footer>
  </HomeGrid>
);

export default Home;
