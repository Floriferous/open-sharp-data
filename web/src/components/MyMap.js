import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMap = ({ longitude, latitude }) => (
  <GoogleMap defaultZoom={6} defaultCenter={{ lat: latitude, lng: longitude }}>
    {longitude && latitude && <Marker position={{ lat: latitude, lng: longitude }} />}
  </GoogleMap>
);

MyMap.propTypes = {};

export default compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDOovBusvvQACNKzD67jLqr_Fry7cs5S-U&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: 600, width: '100%' }} />,
    mapElement: <div style={{ height: '100%', width: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(MyMap);
