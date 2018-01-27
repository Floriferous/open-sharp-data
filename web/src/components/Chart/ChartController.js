import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Radio, Switch } from 'antd';

import * as chartActions from '../../actions/chart';
import { ABSOLUTE, NORMALIZED, ALL, BY_DISTANCE } from '../../reducers/chart';
import RadiusPicker from './RadiusPicker';
import './ChartController.css';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const ChartController = ({ type, setChartType }) => (
  <div className="chart-controller">
    <RadioGroup onChange={e => setChartType(e.target.value)} value={type} className="chart-type">
      <RadioButton value={ABSOLUTE}>Absolute comparison</RadioButton>
      <RadioButton value={NORMALIZED}>Normalized comparison</RadioButton>
    </RadioGroup>
    <RadiusPicker />
  </div>
);

ChartController.propTypes = {};

export default connect(({ chart: { type } }) => ({ type }), chartActions)(ChartController);
