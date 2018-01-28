import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Radio, Slider, InputNumber } from 'antd';
import debounce from 'lodash/debounce';

import * as chartActions from '../../actions/chart';
import { ALL, BY_DISTANCE } from '../../reducers/chart';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const MIN = 50;
const MAX = 2000;
const STEP = 50;

const setComparison = debounce(func => func(), 500);

const RadiusPicker = ({
  comparison,
  setChartComparison,
  radius,
  setRadius,
  setComparisonData,
  neighborsExist,
}) => (
  <div className="radius-picker">
    <RadioGroup onChange={e => setChartComparison(e.target.value)} value={comparison}>
      <RadioButton value={ALL}>Compare to all</RadioButton>
      <RadioButton value={BY_DISTANCE}>Compare by distance [km]</RadioButton>
    </RadioGroup>
    {comparison === BY_DISTANCE && (
      <div className="slider">
        <Slider
          min={MIN}
          max={MAX}
          step={STEP}
          value={radius}
          onChange={(value) => {
            setRadius(value);
            setComparison(setComparisonData);
          }}
          style={{ flex: 1 }}
        />
        <InputNumber
          min={MIN}
          max={MAX}
          style={{ marginLeft: 16 }}
          value={radius}
          onChange={(value) => {
            setRadius(value);
            setComparison(setComparisonData);
          }}
        />
      </div>
    )}
  </div>
);

RadiusPicker.propTypes = {};

export default connect(
  ({ chart: { comparison, radius } }) => ({
    comparison,
    radius,
  }),
  chartActions,
)(RadiusPicker);
