import React from 'react';
import PropTypes from 'prop-types';

import Actions from './Actions';
import './HomeView.css';
import getDistanceToOthers from '../../utils/getDistanceToOthers';

// getDistanceToOthers(9.1308075, 26.9844013);

const HomeView = props => (
  <section className="home-view">
    <h2>Welcome to Open SHARP Data</h2>
    <p>This is a tool to let you get more insights into the SHARP dataset</p>
    <Actions />
  </section>
);

HomeView.propTypes = {};

export default HomeView;
