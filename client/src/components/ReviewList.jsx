/*
 * Copyright 2019-present Seek-A-Design, LLC. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import Review from './Review';

const ReviewListStyled = styled.div`
  grid-area: reviews;
  grid-column: 2/3;
  grid-row: 2/3;

  background-color: blue;
  height: 100%;
  overflow-y: scroll;
`;

const ReviewList = ({ reviews }) => (
  <ReviewListStyled>
    {reviews.map((review, index) => (
      <Review key={index} review={review} />
    ))}
  </ReviewListStyled>
);

export default ReviewList;
