/*
 * Copyright 2019-present Seek-A-Design, LLC. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import ReviewList from './ReviewList';
import SocialIcons from './SocialIcons';

import ABOUT from '../const/about';
import REVIEWS from '../const/reviews';
import fancyOrnamentURL from '../../dist/assets/images/OrnamentalDivider.svg';

const AboutGrid = styled.main`
  grid-area: main;
  grid-column: 2/3;
  grid-row: 2/3;

  display: grid;
  grid-template-rows: 13fr 2fr;
  grid-template-areas: "aboutcontent"
                       "footer";

  height: 100%;
`;

// TODO: Don't hardcode height here!
const AboutContent = styled.div`
  grid-area: aboutcontent;

  display: grid;
  grid-template-columns: 11fr 13fr;
  grid-template-rows: 1fr 4fr;
  grid-template-areas:  "about-title reviews-title"
                       "about reviews";
  justify-items: center;

  background-color: white;
  border: 7px solid #06837A;
  border-radius: 25px;
  height: 607.5px;
  padding-bottom: 20px;
  padding-right: 22px;
  width: 100%;
`;

const AboutTitle = styled.div`
  grid-area: about-title;
  grid-column: 1/2;
  grid-row: 1/2;

  align-self: end;
  color: rgb(87, 11, 95);
  display: block;
  font-family: AlexandriaFLF-Bold;
  font-size: 32px;
  letter-spacing: 1px;
  margin-top: 4.7%;
  text-align: center;
  width: 80%;
`;

const ReviewsTitle = styled.h1`
  grid-area: reviews-title;
  grid-column: 2/3;
  grid-row: 1/2;

  align-self: center;
  color: rgb(87, 11, 95);
  text-align: center;
  font-family: ChandelleDisplay;
`;

const AboutDescription = styled.div`
  grid-area: about;
  grid-column: 1/2;
  grid-row: 2/3;

  height: 100%;
  padding-top: 10px;
  padding-bottom: 30px;
  overflow-y: scroll;
`;

const AboutParagraph = styled.p`
  font-family: AlexandriaFLF;
  font-size: 16px;
  font-weight: 500;
  margin: 0 auto;
  width: 90%;
  text-align: center;
`;

const About = () => (
  <AboutGrid>
    <AboutContent>
      <AboutTitle>
        <h1>Who is<br />Seek-A-Design?</h1>
        <img src={fancyOrnamentURL} width="100%"/>
      </AboutTitle>
      <ReviewsTitle>Seeking-A-Review?</ReviewsTitle>
      <AboutDescription>
        <AboutParagraph>
          {ABOUT[0]}
        </AboutParagraph>
        <br/>
        <AboutParagraph>
          {ABOUT[1]}
        </AboutParagraph>
        <br/>
        <AboutParagraph>
          {ABOUT[2]}
        </AboutParagraph>
      </AboutDescription>
      <ReviewList reviews={REVIEWS}/>
    </AboutContent>
    <Footer>
      <SocialIcons />
    </Footer>
  </AboutGrid>
);

export default About;
