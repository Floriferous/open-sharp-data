import React from 'react';
import PropTypes from 'prop-types';

import Chart from '../../components/Chart';
import MyMap from '../../components/MyMap';

const DataInfo = ({ data }) => (
  <div className="data-info">
    <div className="chart-box card">
      <h2>Your survey compared to the rest</h2>
      <Chart data={data} className="chart" />
    </div>

    <MyMap
      longitude={Number.parseFloat(data['S0_INFO.coords:lon'])}
      latitude={Number.parseFloat(data['S0_INFO.coords:lat'])}
    />
  </div>
);

DataInfo.propTypes = {};

export default DataInfo;
