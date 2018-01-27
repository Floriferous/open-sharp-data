import React from 'react';
import PropTypes from 'prop-types';

import { Upload, message, Button, Icon } from 'antd';
import { connect } from 'react-redux';

import * as fileActions from '../actions/setFile';
import { UPLOAD_STATUS_LOADING } from '../reducers/file';

const handleUpload = (file, setFile) => {
  setFile(file)
    .then((data) => {
      message.success('File uploaded successfully');
      return data;
    })
    .catch((error) => {
      message.error('File upload failed...');
      console.log('Upload error:', error);
    });

  return false;
};

const Uploader = ({ text, fileStatus, setFile }) => (
  <Upload
    accept=".csv"
    beforeUpload={file => handleUpload(file, setFile)}
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
  fileStatus: PropTypes.bool.isRequired,
};

export default connect((store) => {
  const { file: { status } } = store;

  return { fileStatus: status };
}, fileActions)(Uploader);
