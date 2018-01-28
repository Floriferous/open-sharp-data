import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'antd';

const Footer = props => (
  <div className="footer">
    <p>
      <small>Made with ❤️ in Switzerland - Dataset last uploaded on Jan 27th 2018</small>
    </p>
    <a href="https://github.com/Floriferous/open-sharp-data">
      <Icon type="github" className="icon" />
    </a>
  </div>
);

Footer.propTypes = {};

export default Footer;
