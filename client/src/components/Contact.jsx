/*
 * Copyright 2019-present Seek-A-Design, LLC. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import UnderConstruction from './UnderConstruction';

const ContactGrid = styled.main`
  grid-area: main;
  grid-column: 2/3;
  grid-row: 2/3;

  display: grid;
  grid-template-rows: 13fr 2fr;
  grid-template-areas: "contactcontent"
                       "footer"
`;

const ContactContent = styled.div`
  grid-area: contactcontent;
  display: grid;
  
  background-color: lightgreen;
`;

const Contact = () => (
  <ContactGrid>
    <ContactContent>
      <div>Contact Content</div>
      <UnderConstruction />
    </ContactContent>
  </ContactGrid>
);

export default Contact;
