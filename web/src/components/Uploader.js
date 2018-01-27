import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Upload, message, Button, Icon } from 'antd';

import { handleCSV } from '../utils/parseCSV';

class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  handleUpload = (file) => {
    const { handleData } = this.props;
    this.setState({ loading: true });

    handleCSV(file)
      .then((data) => {
        this.setState({ loading: false });
        message.success('File uploaded successfully');
        return data;
      })
      .then(handleData)
      .catch((error) => {
        this.setState({ loading: false });
        message.error('File upload failed...');
        console.log('Upload error:', error);
      });

    return false;
  };

  render() {
    const { text } = this.props;
    const { loading } = this.state;

    return (
      <Upload accept=".csv" beforeUpload={this.handleUpload} disabled={loading}>
        <Button>
          <Icon type="upload" /> {text}
        </Button>
      </Upload>
    );
  }
}

Uploader.propTypes = {
  handleData: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Uploader;
