import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DataInfo from './DataInfo';
import DataList from './DataList';
import './DataView.css';

const DataView = ({ data }) => (
  <section className="data-view">
    <h1>Explore the data</h1>
    {data && data.data && <DataInfo data={data.data} />}
    <DataList />
  </section>
);

DataView.propTypes = {
  data: PropTypes.object.isRequired,
};

export default connect(({ file: { data } }) => ({ data }))(DataView);
