export const SET_CHART_TYPE = 'SET_CHART_TYPE';

export const ABSOLUTE = 'ABSOLUTE';
export const NORMALIZED = 'NORMALIZED';

const initialState = { type: ABSOLUTE };

const chart = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHART_TYPE:
      return { ...state, type: action.chartType };
    default:
      return state;
  }
};

export default chart;
