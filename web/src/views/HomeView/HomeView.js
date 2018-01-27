import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { DATA_VIEW_LINK } from '../../App';
import './HomeView.css';

const HomeView = props => (
  <section className="home-view">
    <h1>Welcome to Open SHARP Data</h1>
    <p>This is a tool to let you get more insights into the SHARP dataset</p>
    <div className="buttons">
      <Button type="primary">Import survey data</Button>
      <Link to={DATA_VIEW_LINK}>
        <Button type="primary">Explore SHARP data</Button>
      </Link>
    </div>
  </section>
);

HomeView.propTypes = {};

export default HomeView;
