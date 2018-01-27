import React from 'react';
import PropTypes from 'prop-types';

import { HorizontalBar } from 'react-chartjs-2';
import importantColumns from '../../data/dataColumns';

const AverageChart = ({ data }) => {
  const columns = Object.keys(importantColumns);
  const labels = columns.map(column => importantColumns[column].label);
  const dataPoints = columns
    .map((column) => {
      const dataValue = Number.parseFloat(data[column]);
      console.log(dataValue);
      if (Number.isNaN(dataValue)) {
        return 0;
      }
      return dataValue - importantColumns[column].average;
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
    tooltips: {
      callbacks: {
        label(tooltipItem) {
          return tooltipItem.yLabel;
        },
      },
    },
  };
  console.log(chartData);
  return <HorizontalBar data={chartData} width={1000} height={500} options={options} />;
};

AverageChart.propTypes = {};

export default AverageChart;
