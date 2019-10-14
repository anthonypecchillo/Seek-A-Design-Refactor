/*
 * Copyright 2019-present Seek-A-Design, LLC. All Rights Reserved.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from './Main.jsx';

const App = () => (
  <Router>
    <Route component={Main} />
  </Router>
);

export default App;
