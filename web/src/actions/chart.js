import {
  SET_CHART_TYPE,
  SET_CHART_COMPARISON,
  SET_RADIUS,
  SET_COMPARISON_DATA,
} from '../reducers/chart';
import getDistanceToOthers from '../utils/getDistanceToOthers';
import summarizeData from '../utils/summarizeData';

export const setChartType = type => ({ type: SET_CHART_TYPE, chartType: type });
export const setChartComparison = comparison => ({ type: SET_CHART_COMPARISON, comparison });
export const setRadius = radius => ({ type: SET_RADIUS, radius });

export const setComparisonData = () => (dispatch, getState) => {
  const { chart: { radius }, file: { data: { data } } } = getState();
  console.log('settings comparison data:', data);

  const lat = Number.parseFloat(data['S0_INFO.coords:lat']);
  const lon = Number.parseFloat(data['S0_INFO.coords:lon']);

  if (radius && lat && lon) {
    getDistanceToOthers(lat, lon).then((dataWithDistance) => {
      const nearbyFarmers = dataWithDistance.slice(1).filter(row => row.distance < radius);
      const summarizedData = summarizeData([dataWithDistance[0], ...nearbyFarmers]);

      dispatch({ type: SET_COMPARISON_DATA, data: summarizedData });
    });
  }
};
