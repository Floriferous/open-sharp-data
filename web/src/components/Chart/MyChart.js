import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { HorizontalBar } from 'react-chartjs-2';
import importantColumns from '../../data/dataColumns';
import { NORMALIZED, ALL } from '../../reducers/chart';

const AverageChart = ({
  data, type, className, optionalComparisonData, comparison,
}) => {
  let comparisonData = importantColumns;
  if (comparison !== ALL && !!optionalComparisonData) {
    comparisonData = optionalComparisonData;
  }
  const columns = Object.keys(comparisonData);
  const labels = columns.map(column => comparisonData[column].label);
  const dataPoints = columns
    .map((column) => {
      const dataValue = Number.parseFloat(data[column]);
      if (Number.isNaN(dataValue) || dataValue === 0) {
        return 0;
      }
      const { average } = comparisonData[column];
      const delta = dataValue - average;
      return type === NORMALIZED ? delta / average : delta;
    })
    .map(value => Math.round(value * 100) / 100);

  const mergedData = labels
    .map((label, index) => ({ label, value: dataPoints[index] }))
    .filter(point => point.value !== 0)
    .sort((a, b) => b.value - a.value);

  const colours = mergedData.map(point => (point.value < 0 ? '#e74c3c' : '#2ecc71'));

  const chartData = {
    labels: mergedData.map(point => point.label),
    datasets: [
      {
        backgroundColor: colours,
        hoverBackgroundColor: colours,
        borderColor: colours,
        hoverBorderColor: colours,
        borderWidth: 1,
        data: mergedData.map(point => point.value),
      },
    ],
  };

  const options = {
    // tooltips: {
    //   callbacks: {
    //     label(tooltipItem) {
    //       return tooltipItem.yLabel;
    //     },
    //   },
    // },
    legend: {
      display: false,
    },
  };
  return (
    <div className={className}>
      <HorizontalBar data={chartData} width={1000} height={500} options={options} />
    </div>
  );
};

AverageChart.propTypes = {};

export default connect(({ chart: { type, comparison } }) => ({ type, comparison }))(AverageChart);