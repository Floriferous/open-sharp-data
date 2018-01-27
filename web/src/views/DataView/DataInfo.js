import React from 'react';
import PropTypes from 'prop-types';

import Chart from './Chart';
import ChartController from './ChartController';
import MyMap from '../../components/MyMap';

const DataInfo = ({ data }) => (
  <div className="data-info">
    <MyMap
      longitude={Number.parseFloat(data['S0_INFO.coords:lon'])}
      latitude={Number.parseFloat(data['S0_INFO.coords:lat'])}
    />
    <div className="chart-box">
      <h2>Your survey compared to the rest</h2>
      <ChartController />
      <Chart data={data} className="chart" />
    </div>
  </div>
);

DataInfo.propTypes = {};

export default DataInfo;
