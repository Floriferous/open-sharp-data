export const SET_FILE = 'SET_FILE';
export const SET_UPLOAD_STATUS = 'SET_UPLOAD_STATUS';
export const REMOVE_FILE = 'REMOVE_FILE';

export const UPLOAD_STATUS_EMPTY = 'EMPTY';
export const UPLOAD_STATUS_LOADING = 'LOADING';
export const UPLOAD_STATUS_LOADED = 'LOADED';
export const UPLOAD_STATUS_ERROR = 'ERROR';

const initialState = {
  status: UPLOAD_STATUS_EMPTY,
};

const file = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILE:
      return { ...state, data: action.data, status: UPLOAD_STATUS_LOADED };
    case SET_UPLOAD_STATUS:
      return { ...state, status: action.status };
    case REMOVE_FILE:
      return initialState;
    default:
      return state;
  }
};

export default file;
