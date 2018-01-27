import React, { Component } from 'react';
import PropTypes from 'prop-types';

import importantColumns from '../../data/dataColumns';

export default class DataList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, averages } = this.state;

    if (data) {
      console.log('Averages:', averages);
      return <div>Done!</div>;
    }

    return <h3>Loading...</h3>;
  }
}

DataList.propTypes = {};
