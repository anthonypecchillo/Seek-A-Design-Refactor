/*
 * Copyright 2019-present Seek-A-Design, LLC. All Rights Reserved.
 */

import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import Footer from './Footer';
import SocialIcons from './SocialIcons';

import ProjectsCardImageOneURL from '../../dist/assets/images/3.jpg';
import ProjectsCardImageTwoURL from '../../dist/assets/images/12.jpg';
import ProjectsCardImageThreeURL from '../../dist/assets/images/13.jpg';

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
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 4.35%;
  /* grid-template-areas:  "TODO: GRID AREAS HERE"; */

  justify-items: center;

  background-color: white;
  border: 7px solid rgb(177, 179, 177);
  /* border-radius: 25px; */
  height: 607.5px;
  padding: 25px 35px;
  width: 100%;
`;

const ProjectsCard = styled(Link)`
  background-color: ${({teal}) => teal ? '#06837A' : 'rgb(87, 11, 95)'};
  border-radius: 25px;
  height: 100%;
  padding-top: 6.5%;
  width: 100%;
  max-width: 340px;
`;

const ProjectsCardTitle = styled.h1`
  /* grid-area: project-card-title; */
  color: white;
  font-family: ChandelleDisplay;
  margin-bottom: 3%;
  text-align: center;
`;

const ProjectsCardImage = styled.div`
  /* grid-area: logo; */
  /* grid-column: 1/2;
  grid-row: 1/3; */

  /* place-self: center; */

  background: ${({url}) => url && `no-repeat center/160% url(${url})`};
  border: 5px solid rgb(255, 189, 0);
  border-radius: 25px;
  height: 74%;
  margin: 0 auto 3% auto;
  /* min-width: 140px; */
  width: 76%;
`;

const Projects = () => (
  <ProjectsGrid>
    <ProjectsContent>
      <ProjectsCard to="/weddinginvitations" teal>
      <ProjectsCardImage url={ProjectsCardImageOneURL} />
        <ProjectsCardTitle>Wedding<br/>Packages</ProjectsCardTitle>
      </ProjectsCard>
      <ProjectsCard to="/occasioninvitations">
        <ProjectsCardTitle>Occasion<br/>Invitations</ProjectsCardTitle>
        <ProjectsCardImage url={ProjectsCardImageTwoURL} />
      </ProjectsCard>
      <ProjectsCard to="/othergoodies" teal>
        <ProjectsCardImage url={ProjectsCardImageThreeURL} />
        <ProjectsCardTitle>Other<br/>Goodies</ProjectsCardTitle>
      </ProjectsCard>
    </ProjectsContent>
    <Footer>
      <SocialIcons>Social Icons</SocialIcons>
    </Footer>
  </ProjectsGrid>
);

export default Projects;
