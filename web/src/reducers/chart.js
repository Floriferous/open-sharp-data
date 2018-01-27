export const SET_CHART_TYPE = 'SET_CHART_TYPE';
export const SET_CHART_COMPARISON = 'SET_CHART_COMPARISON';
export const SET_RADIUS = 'SET_RADIUS';
export const SET_COMPARISON_DATA = 'SET_COMPARISON_DATA';

export const ABSOLUTE = 'ABSOLUTE';
export const NORMALIZED = 'NORMALIZED';

export const ALL = 'ALL';
export const BY_DISTANCE = 'BY_DISTANCE';

const initialState = { type: ABSOLUTE, comparison: ALL, radius: 50 };

const chart = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHART_TYPE:
      return { ...state, type: action.chartType };
    case SET_CHART_COMPARISON:
      return { ...state, comparison: action.comparison };
    case SET_RADIUS:
      return { ...state, radius: action.radius };
    case SET_COMPARISON_DATA:
      return { ...state, comparisonData: action.data, nearbyCount: action.count };
    default:
      return state;
  }
};

export default chart;
