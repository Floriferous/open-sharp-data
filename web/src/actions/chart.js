import { message } from 'antd';

import {
  SET_CHART_TYPE,
  SET_CHART_COMPARISON,
  SET_RADIUS,
  SET_COMPARISON_DATA,
  SET_COMPARISON_DATA_SET,
} from '../reducers/chart';
import getDistanceToOthers from '../utils/getDistanceToOthers';
import summarizeData from '../utils/summarizeData';

export const setChartType = type => ({ type: SET_CHART_TYPE, chartType: type });
export const setChartComparison = comparison => ({ type: SET_CHART_COMPARISON, comparison });
export const setRadius = radius => ({ type: SET_RADIUS, radius });
export const setComparisonDataSet = dataSet => (dispatch) => {
  dispatch({
    type: SET_COMPARISON_DATA_SET,
    dataSet,
  });
  dispatch(setComparisonData());
};

export const setComparisonData = () => (dispatch, getState) => {
  const { chart: { radius, dataSet }, file: { data: { data } } } = getState();
  console.log('dataset: ', dataSet);

  const lat = Number.parseFloat(data['S0_INFO.coords:lat']);
  const lon = Number.parseFloat(data['S0_INFO.coords:lon']);

  if (radius && lat && lon) {
    getDistanceToOthers(lat, lon, dataSet).then((dataWithDistance) => {
      const distances = dataWithDistance
        .filter(point => !Number.isNaN(point.distance) && !!point.distance)
        .map(point => point.distance);
      const nearbyFarmers = dataWithDistance.slice(1).filter(row => row.distance < radius * 1000);
      const nearbyFarmersCount = nearbyFarmers.length;
      const summarizedData = summarizeData([dataWithDistance[0], ...nearbyFarmers]);

      if (nearbyFarmersCount === 0) {
        message.error(`No farmers nearby in a ${radius} km radius...`);
      } else {
        message.success(`Comparing with ${nearbyFarmersCount} nearby`);
      }

      dispatch({
        type: SET_COMPARISON_DATA,
        data: summarizedData,
        count: nearbyFarmersCount,
      });
    });
  }
};
