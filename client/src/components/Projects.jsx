/*
 * Copyright 2019-present Seek-A-Design, LLC. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import SocialIcons from './SocialIcons';
import UnderConstruction from './UnderConstruction';

const ProjectsGrid = styled.main`
  grid-area: main;
  grid-column: 2/3;
  grid-row: 2/3;

  display: grid;
  grid-template-rows: 13fr 2fr;
  grid-template-areas: "projectscontent"
                       "footer"
`;

const ProjectsContent = styled.div`
  grid-area: projectscontent;

  display: grid;

  background-color: lightgreen;
`;

const Projects = () => (
  <ProjectsGrid>
    <ProjectsContent>
      <div>Projects Content</div>
      <UnderConstruction />
    </ProjectsContent>
    <Footer>
      <SocialIcons>Social Icons</SocialIcons>
    </Footer>
  </ProjectsGrid>
);

export default Projects;
