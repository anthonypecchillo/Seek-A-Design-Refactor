/*
 * Copyright 2019-present Seek-A-Design, LLC. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import SocialIcons from './SocialIcons';

const AboutGrid = styled.main`
  grid-area: main;
  grid-column: 2/3;
  grid-row: 2/3;

  display: grid;
  grid-template-rows: 13fr 2fr;
  grid-template-areas: "aboutcontent"
                       "footer"
`;

const AboutContent = styled.div`
  grid-area: aboutcontent;

  display: grid;
  grid-template-columns: 11fr 13fr;
  grid-template-rows: 1fr 4fr;
  grid-template-areas:  "about-title reviews-title"
                       "about reviews";
`;

const AboutTitle = styled.div`
  grid-area: about-title;
  grid-column: 1/2;
  grid-row: 1/2;

  background-color: lightgreen;
`;

const ReviewsTitle = styled.div`
  grid-area: reviews-title;
  grid-column: 2/3;
  grid-row: 1/2;

  background-color: lightblue;
`;

const AboutDescription = styled.div`
  grid-area: about;
  grid-column: 1/2;
  grid-row: 2/3;

  background-color: green;
`;

const ReviewsList = styled.div`
  grid-area: reviews;
  grid-column: 2/3;
  grid-row: 2/3;
  
  background-color: blue;
`;

const About = () => (
  <AboutGrid>
    <AboutContent>
      <AboutTitle>Who is Seek-A-Design?</AboutTitle>
      <ReviewsTitle>Seeking-A-Review?</ReviewsTitle>
      <AboutDescription>About text.</AboutDescription>
      <ReviewsList>Reviews list.</ReviewsList>
    </AboutContent>
    <Footer>
      <SocialIcons>Social Icons</SocialIcons>
    </Footer>
  </AboutGrid>
);

export default About;
