import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Radio } from 'antd';

import * as chartActions from '../../actions/chart';
import { ABSOLUTE, NORMALIZED, MAIN_SET, UGANDA_SET } from '../../reducers/chart';
import RadiusPicker from './RadiusPicker';
import './ChartController.css';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const ChartController = ({
  type, setChartType, dataSet, setComparisonDataSet,
}) => (
  <div className="chart-controller">
    <RadioGroup onChange={e => setChartType(e.target.value)} value={type} className="chart-type">
      <RadioButton value={ABSOLUTE}>Absolute comparison</RadioButton>
      <RadioButton value={NORMALIZED}>Normalized comparison</RadioButton>
    </RadioGroup>
    <RadioGroup
      onChange={e => setComparisonDataSet(e.target.value)}
      value={dataSet}
      className="chart-type"
    >
      <RadioButton value={MAIN_SET}>Main data set</RadioButton>
      <RadioButton value={UGANDA_SET}>Uganda data set</RadioButton>
    </RadioGroup>
    <RadiusPicker />
  </div>
);

ChartController.propTypes = {};

export default connect(({ chart: { type, dataSet } }) => ({ type, dataSet }), chartActions)(ChartController);
