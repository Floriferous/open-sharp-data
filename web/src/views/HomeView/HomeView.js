import React from 'react';
import PropTypes from 'prop-types';

import Actions from './Actions';
import './HomeView.css';

const HomeView = props => (
  <section className="home-view">
    <h1>Welcome to Open SHARP Data</h1>
    <p>This is a tool to let you get more insights into the SHARP dataset</p>
    <Actions />
  </section>
);

HomeView.propTypes = {};

export default HomeView;
