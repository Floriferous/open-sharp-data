import getComparisonData from '../data/dataColumns';

const comparisonData = getComparisonData();

const columnKeys = Object.keys(comparisonData);

const groupDataInObject = (data) => {
  const columnLabels = data[0];
  const dataRowCount = data.length - 1; // remove initial row

  const cleanData = [];

  const indexes = [];
  const allKeys = [...columnKeys, 'S0_INFO.coords:lat', 'S0_INFO.coords:lon'];

  allKeys.forEach((key) => {
    const index = columnLabels.findIndex(columnKey => columnKey === key);

    if (index) {
      indexes.push(index);
    }
  });

  indexes.forEach((importantColumnIndex) => {
    const label = columnLabels[importantColumnIndex];
    data.slice(1).forEach((row, rowIndex) => {
      cleanData[rowIndex] = {
        ...cleanData[rowIndex],
        [label]: row[importantColumnIndex],
      };
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
    min: Math.min(...values),
    max: Math.max(...values),
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
  const t1 = new Date().getTime();
  const cleanData = groupDataInObject(data);
  const t2 = new Date().getTime();
  console.log('delta 1: ', (t2 - t1) / 1000, 'seconds');

  const columnsToSummarize = [...columnKeys, 'distance'];

  const summary = columnsToSummarize.reduce((accumulator, columnLabel) => {
    const {
      sum, count, min, max,
    } = getSum(cleanData, columnLabel);
    const average = sum / count || 0;

    return {
      ...accumulator,
      [columnLabel]: {
        sum,
        count,
        min,
        max,
        average,
        label: (comparisonData[columnLabel] && comparisonData[columnLabel].label) || columnLabel,
      },
    };
  }, {});

  const t3 = new Date().getTime();
  console.log('delta 2: ', (t3 - t2) / 1000, 'seconds');
  console.log('delta total: ', (t3 - t1) / 1000, 'seconds');

  return summary;
};

export default summarizeData;
