/*
 * Copyright 2019-present Seek-A-Design, LLC. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const ReviewStyled = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-template-rows: auto 40px;
  justify-items: center;

  background: tomato;
  font-family: AlexandriaFLF;
  font-size: 16px;
  font-weight: 500;
  margin: 20px auto;
  height: auto;
  width: 90%;
`;

const ReviewMessage = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;

  margin: 20px;
  width: 90%;
  text-align: left;
`;

const ReviewerName = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  font-size: 12px;
`;

const Review = ({ review }) => (
  <ReviewStyled>
    <ReviewMessage>{review.message}</ReviewMessage>
    <ReviewerName>{`- ${review.firstName} ${review.lastName.charAt(0)}.`}</ReviewerName>
  </ReviewStyled>
);

export default Review;
