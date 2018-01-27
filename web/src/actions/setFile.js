import { message } from 'antd';
import { handleCSV } from '../utils/parseCSV';

import { UPLOAD_STATUS_LOADING, UPLOAD_STATUS_ERROR } from '../reducers/file';

export const setUploadStatus = (status, error) => ({
  type: 'SET_UPLOAD_STATUS',
  status,
  error,
});

export const setFile = file => (dispatch) => {
  dispatch(setUploadStatus(UPLOAD_STATUS_LOADING));

  return handleCSV(file)
    .then((data) => {
      dispatch({ type: 'SET_FILE', data });
    })
    .catch((error) => {
      dispatch(setUploadStatus(UPLOAD_STATUS_ERROR, error));

      message.error('File upload failed...');
      console.log('Upload error:', error);
    });
};
