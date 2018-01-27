import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import DataInfo from './DataInfo';
import './DataView.css';

const DataView = ({ data }) => {
  if (!data || !data.data) {
    return <Redirect to="/" />;
  }

  return (
    <section className="data-view">
      <h1>Explore the data</h1>
      {data && data.data && <DataInfo data={data.data} />}
    </section>
  );
};

DataView.propTypes = {
  data: PropTypes.object.isRequired,
};

export default connect(({ file: { data } }) => ({ data }))(DataView);
