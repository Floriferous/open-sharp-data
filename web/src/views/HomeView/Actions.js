import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { DATA_VIEW_LINK } from '../../App';
import Uploader from '../../components/Uploader';

const Actions = props => (
  <div className="buttons">
    <Uploader
      handleData={(data) => {
        console.log('Done! ', data);
      }}
      text="Click to upload survey"
    />
    <span className="or">- or -</span>
    <Link to={DATA_VIEW_LINK}>
      <Button type="primary">Explore SHARP data</Button>
    </Link>
  </div>
);

Actions.propTypes = {};

export default Actions;
