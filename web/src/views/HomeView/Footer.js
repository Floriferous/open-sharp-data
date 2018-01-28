import React from 'react';

import { Icon } from 'antd';

const Footer = () => (
  <div className="footer">
    <p>
      <small>
        Made with{' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>{' '}
        in Switzerland - Dataset last updated on Jan 27th 2018
      </small>
    </p>
    <a href="https://github.com/Floriferous/open-sharp-data">
      <Icon type="github" className="icon" />
    </a>
  </div>
);

export default Footer;
