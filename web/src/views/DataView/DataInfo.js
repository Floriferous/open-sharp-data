import React from 'react';
import PropTypes from 'prop-types';

const DataInfo = ({ data: { 'S0_INFO.date': date } }) => (
  <div className="data-info">
    <h1>Survey from {date}</h1>
  </div>
);

DataInfo.propTypes = {};

export default DataInfo;
