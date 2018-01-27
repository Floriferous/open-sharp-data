import importantColumns from '../data/dataColumns';

const columnKeys = Object.keys(importantColumns);

const groupDataInObject = (data) => {
  console.log('groupDataInObject data:', data);
  const columnLabels = data[0];
  const dataRowCount = data.length - 1; // remove initial row

  const cleanData = [];

  columnLabels.forEach((columnLabel, columnIndex) => {
    data.slice(1).forEach((row, rowIndex) => {
      cleanData[rowIndex - 1] = { ...cleanData[rowIndex - 1], [columnLabel]: row[columnIndex] };
    });
  });

  return cleanData;
};

const getSum = (data, key) => {
  let count = 0;
  const values = [];
  const sum = data.reduce((acc, column) => {
    const parsedValue = Number.parseFloat(column[key]);

    if (Number.isNaN(parsedValue) || parsedValue === 0) {
      return acc;
    }

    count += 1;
    values.push(parsedValue);
    return acc + parsedValue;
  }, 0);

  return {
    sum,
    count,
    min: Math.min(values),
    max: Math.max(values),
  };
};

// const getAverage = (data) => {
//   const sum = data.reduce((acc, value) => acc + value, 0);
//
//   const avg = sum / data.length;
//   return avg;
// };
//
// const getStandardDeviation = (values, average) => {
//   const squareDiffs = values.map((value) => {
//     const diff = value - average;
//     const sqrDiff = diff * diff;
//     return sqrDiff;
//   });
//
//   const avgSquareDiff = getAverage(squareDiffs);
//
//   const stdDev = Math.sqrt(avgSquareDiff);
//   return stdDev;
// };

const summarizeData = (data) => {
  const cleanData = groupDataInObject(data);
  const columnsToSummarize = [...columnKeys, 'distance'];

  const summary = columnsToSummarize.map((columnLabel) => {
    const {
      sum, count, min, max,
    } = getSum(cleanData, columnLabel);
    const average = sum / count || 0;

    return {
      sum,
      count,
      min,
      max,
      average,
      label: columnLabel,
    };
  });

  return summary;
};

export default summarizeData;
