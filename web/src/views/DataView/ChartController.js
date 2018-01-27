import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Radio } from 'antd';

import * as chartActions from '../../actions/chart';
import { ABSOLUTE, NORMALIZED } from '../../reducers/chart';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const ChartController = ({ type, setChartType }) => (
  <RadioGroup onChange={e => setChartType(e.target.value)} value={type}>
    <RadioButton value={ABSOLUTE}>Absolute comparison</RadioButton>
    <RadioButton value={NORMALIZED}>Normalized comparison</RadioButton>
  </RadioGroup>
);

ChartController.propTypes = {};

export default connect(({ chart: { type } }) => ({ type }), chartActions)(ChartController);
