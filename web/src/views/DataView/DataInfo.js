import React from 'react';
import PropTypes from 'prop-types';

import Chart from './Chart';

const DataInfo = ({ data }) => (
  <div className="data-info">
    <h2>Your survey compared to the rest</h2>
    <Chart data={data} />
  </div>
);

DataInfo.propTypes = {};

export default DataInfo;
