import React from 'react';
import PropTypes from 'prop-types';

import { Upload, message, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as fileActions from '../actions/setFile';
import { UPLOAD_STATUS_LOADING } from '../reducers/file';
import { DATA_VIEW_LINK } from '../App';

const handleUpload = (file, setFile, push) => {
  setFile(file)
    .then(() => {
      message.success('File uploaded successfully');
      push(DATA_VIEW_LINK);
    })
    .catch((error) => {
      message.error('File upload failed...');
      console.log('Upload error:', error);
    });

  return false;
};

const Uploader = ({
  text, fileStatus, setFile, history: { push },
}) => (
  <Upload
    accept=".csv"
    beforeUpload={file => handleUpload(file, setFile, push)}
    disabled={fileStatus === UPLOAD_STATUS_LOADING}
  >
    <Button>
      <Icon type="upload" /> {text}
    </Button>
  </Upload>
);

Uploader.propTypes = {
  setFile: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  fileStatus: PropTypes.string.isRequired,
};

export default connect((store) => {
  const { file: { status } } = store;

  return { fileStatus: status };
}, fileActions)(withRouter(Uploader));
