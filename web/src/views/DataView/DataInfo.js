import React from 'react';
import PropTypes from 'prop-types';

import Chart from '../../components/Chart';
import MyMap from '../../components/MyMap';

const DataInfo = ({ data }) => {
  const longitude = Number.parseFloat(data['S0_INFO.coords:lon']);
  const latitude = Number.parseFloat(data['S0_INFO.coords:lat']);
  return (
    <div className="data-info">
      <div className="chart-box card">
        <h2>Your survey compared to the rest</h2>
        <Chart data={data} className="chart" />
      </div>

      {longitude && latitude && <MyMap longitude={longitude} latitude={latitude} />}
    </div>
  );
};

DataInfo.propTypes = {};

export default DataInfo;
