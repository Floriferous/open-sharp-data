import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Upload, Button, Icon } from 'antd';
import { connect } from 'react-redux';

import * as fileActions from '../actions/setFile';
import { UPLOAD_STATUS_LOADING } from '../reducers/file';

class Uploader extends Component {
  handleUpload = (file) => {
    const { setFile, handleSuccess, handleError } = this.props;
    setFile(file)
      .then(handleSuccess)
      .catch(handleError);

    return false;
  };

  render() {
    const { fileStatus, text } = this.props;
    return (
      <Upload
        accept=".csv"
        beforeUpload={file => this.handleUpload(file)}
        disabled={fileStatus === UPLOAD_STATUS_LOADING}
      >
        <Button size="large">
          <Icon type="upload" /> {text}
        </Button>
      </Upload>
    );
  }
}

Uploader.propTypes = {
  setFile: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  fileStatus: PropTypes.string.isRequired,
};

export default connect((store) => {
  const { file: { status } } = store;

  return { fileStatus: status };
}, fileActions)(Uploader);
