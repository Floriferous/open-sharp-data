import React from 'react';
import PropTypes from 'prop-types';

import { Upload, message, Button, Icon } from 'antd';
import { connect } from 'react-redux';

import * as fileActions from '../actions/setFile';
import { UPLOAD_STATUS_LOADING } from '../reducers/file';

const handleUpload = (file) => {
  const { setFile } = this.props;

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

const Uploader = ({ text, status }) => (
  <Upload accept=".csv" beforeUpload={handleUpload} disabled={status === UPLOAD_STATUS_LOADING}>
    <Button>
      <Icon type="upload" /> {text}
    </Button>
  </Upload>
);

Uploader.propTypes = {
  setFile: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default connect(({ file: { status } }) => ({ fileStatus: status }), fileActions)(Uploader);
