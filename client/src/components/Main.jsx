/*
 * Copyright 2019-present Seek-A-Design, LLC. All Rights Reserved.
 */

// TODO: Import FontAwesome Icons rather than using CDN to increase page load speed!
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import styled from 'styled-components';

import About from './About.jsx';
import Contact from './Contact.jsx';
import FourZeroFour from './FourZeroFour.jsx';
import Home from './Home.jsx';
import NavBar from './NavBar.jsx';
import Projects from './Projects.jsx';
import UnderConstruction from './UnderConstruction.jsx';
import WeddingInvitations from './WeddingInvitations.jsx';
import OccasionInvitations from './OccasionInvitations.jsx';
import OtherGoodies from './OtherGoodies.jsx';

import LogoURL from '../../dist/assets/images/SeekADesign_VectorLogo.svg';

const AppGrid = styled.div`
  display: grid;
  grid-row-gap: 2%;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 5fr 15fr;
  grid-template-areas:  "none header none" 
                       "none main none";
  height: 100%;
`;

const HeaderGridStyled = styled.div`
  grid-area: header;
  grid-column: 2/3;
  grid-row: 1/2;

  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "logo nav-container"
                       "logo nav-container";

  /* background-color: beige; */

  /* @media (max-width: 990px) {
    grid-template-areas: "photo name"
                         "label ."
                         "description ."; */
`;

const LogoStyled = styled.div`
  grid-area: logo;
  grid-column: 1/2;
  grid-row: 1/3;

  place-self: center;

  background: no-repeat center/100% url(${LogoURL});
  height: 20vmin;
  /* min-width: 140px; */
  width: 20vmin;
`;

const HeaderText = styled.div`
  align-self: top;
  justify-self: center;

  font-family: AlexandriaFLF-Bold;
  font-size: 30px;
  letter-spacing: 1px;
  margin-top: 20px;
`;

const Main = () => (
  <AppGrid>
    <HeaderGridStyled>
      <LogoStyled />
      <NavBar />
      <HeaderText>CUSTOM DESIGNS • MARKETING • BRANDING • AND MORE</HeaderText>
    </HeaderGridStyled>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/weddinginvitations" component={WeddingInvitations} />
      <Route path="/occasioninvitations" component={OccasionInvitations} />
      <Route path="/othergoodies" component={OtherGoodies} />
      <Route component={FourZeroFour} />
    </Switch>
  </AppGrid>
);

export default Main;

/*
React Router v4.x.x Notes:
--------------------------

A <Switch> will iterate over all of its children <Route> elements
and only render the first one that matches the current location. This
helps when multiple route’s paths match the same pathname, when animating
transitions between routes, and in identifying when no routes match the
current location (so that you can render a “404” component).

Any time that you want to force navigation (maybe when a form is submitted?)
you can render a <Redirect to="/login" />. Also really good for responsive
routes that react to screen size changes. When a <Redirect> renders, it will
navigate using its `to` prop.

Don't forget about Loadable Components! You can dynamically load different
portions of the site when a user navigates to that part, that way the user
doesn't have to download the entire site all at once.
(In Docs, called: Code Splitting)
WILL THIS BE USEFUL FOR COMPONENTS WITH LOTS OF PICTURES?

Also, don't forget about Scroll Restoration, if pages are loading not scrolled
to the top of the page!

Use the "Preventing Transitions" example to show a prompt when a user has
filled in some of the fields in Lyandra's form and then tries to navigate
away without submitting the form! (Easy!)

Use the "No Match (404)" example to handle all undefined routes. (Easy!)

Use the "Animated Transitions" example to create navigation animations. (Medium!)

Use the "Modal Gallery" example to create a modal image gallery with proper
routing for the Projects page sub routes! (Hard!)
*/
