/*
 * Copyright 2019-present Seek-A-Design, LLC. All Rights Reserved.
 */

import React from 'react';
// import { Link } from "react-router-dom";
import styled from 'styled-components';

import Footer from './Footer';
import SocialIcons from './SocialIcons';

// import ProjectsCardImageOneURL from '../../dist/assets/images/3.jpg';

const ProjectsGrid = styled.main`
  grid-area: main;
  grid-column: 2/3;
  grid-row: 2/3;

  display: grid;
  grid-template-rows: 13fr 2fr;
  grid-template-areas: "projectscontent"
                       "footer"
`;

const Projects = () => (
  <ProjectsGrid>
    <div>You did it!</div>
    <Footer>
      <SocialIcons>Social Icons</SocialIcons>
    </Footer>
  </ProjectsGrid>
);

export default Projects;
