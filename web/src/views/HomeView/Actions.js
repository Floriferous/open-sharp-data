import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, message } from 'antd';
import { withRouter } from 'react-router';

import Uploader from '../../components/Uploader';
import * as fileActions from '../../actions/setFile';
import getCsvData from '../../utils/getCsvData';
import { DATA_VIEW_LINK } from '../../App';

const sampleData = require('../../data/sample_survey2.csv');

const handleFileSuccess = (push) => {
  message.success('File loaded successfully');
  push(DATA_VIEW_LINK);
};

const handleFileError = (error) => {
  message.error('File loading failed...');
  console.log('Upload error:', error);
};

const handleClick = (setFile, push) =>
  getCsvData(sampleData)
    .then(setFile)
    .then(() => handleFileSuccess(push))
    .catch(handleFileError);

const Actions = ({ setFile, history: { push } }) => (
  <div className="buttons">
    <Uploader
      handleSuccess={() => handleFileSuccess(push)}
      handleError={handleFileError}
      text="Click to upload survey"
    />
    <span className="or">- or -</span>
    <Button type="primary" onClick={() => handleClick(setFile, push)} size="large">
      Set sample data
    </Button>
  </div>
);

Actions.propTypes = {};

export default connect(null, fileActions)(withRouter(Actions));
