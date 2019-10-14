/*
 * Copyright 2019-present Seek-A-Design, LLC. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const Footer = styled.div `
  grid-area: footer;
  
  display: grid;
  grid-template-columns: 6fr 1fr;
  grid-template-areas: ". socialicons";
`;

export default Footer;
