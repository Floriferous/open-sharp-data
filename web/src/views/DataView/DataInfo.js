import React from 'react';
import PropTypes from 'prop-types';

import Chart from './Chart';
import ChartController from './ChartController';

const DataInfo = ({ data }) => (
  <div className="data-info">
    <h2>Your survey compared to the rest</h2>
    <ChartController />
    <Chart data={data} />
  </div>
);

DataInfo.propTypes = {};

export default DataInfo;
