import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DataList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, averages } = this.state;

    if (data) {
      return <div>Done!</div>;
    }

    return <h3>Loading...</h3>;
  }
}

DataList.propTypes = {};
