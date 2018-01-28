import React from 'react';
import PropTypes from 'prop-types';

import Actions from './Actions';
import ColumnListModal from '../../components/ColumnListModal';
import './HomeView.css';

const HomeView = props => (
  <section className="home-view card">
    <h2>Open SHARP Data</h2>
    <p>
      This is a tool to let you get more insights into the SHARP dataset, we expect you to upload a
      csv file containing 2 (and only 2) rows:
    </p>
    <ul>
      <li>The first row should be the standard column labels of the SHARP Data set</li>
      <li>The second row should be the survey data</li>
      <li>
        <ColumnListModal />
      </li>
    </ul>
    <Actions />
  </section>
);

HomeView.propTypes = {};

export default HomeView;
