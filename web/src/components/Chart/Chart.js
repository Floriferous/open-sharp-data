import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ChartController from './ChartController';
import MyChart from './MyChart';

const chartActions = (props) => {
  const longitude = Number.parseFloat(props.data['S0_INFO.coords:lon']);
  const latitude = Number.parseFloat(props.data['S0_INFO.coords:lat']);
  return (
    <div className="chart-container">
      <ChartController showRadiusPicker={!!(longitude && latitude)} />
      <MyChart {...props} optionalComparisonData={props.comparisonData} />
    </div>
  );
};

chartActions.propTypes = {
  comparisonData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(({ chart: { comparisonData } }) => ({ comparisonData }))(chartActions);
