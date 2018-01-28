import React from 'react';

import Actions from './Actions';
import ColumnListModal from '../../components/ColumnListModal';

const Main = () => (
  <div className="main">
    <h2>Open SHARP Data</h2>
    <hr />
    <p>
      This is a tool to let you get more insights into the{' '}
      <a href="http://www.fao.org/in-action/sharp/data/geography/en/" target="_blank">
        FAO's SHARP dataset
      </a>. We expect you to upload a csv file containing 2 rows:
    </p>
    <ul>
      <li>
        The first row should be the standard column labels of the SHARP Data set.{' '}
        <ColumnListModal />
      </li>
      <li>The second row should be the survey data</li>
    </ul>
    <Actions />
  </div>
);

export default Main;
