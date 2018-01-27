import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ChartController from './ChartController';
import MyChart from './MyChart';

const chartActions = props => (
  <div>
    <ChartController />
    <MyChart {...props} optionalComparisonData={props.comparisonData} />
  </div>
);

chartActions.propTypes = {
  comparisonData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(({ chart: { comparisonData } }) => ({ comparisonData }))(chartActions);
