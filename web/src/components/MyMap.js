import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMap = ({ longitude, latitude, coordinates }) => (
  <GoogleMap defaultZoom={6} defaultCenter={{ lat: latitude, lng: longitude }}>
    {longitude && latitude && <Marker position={{ lat: latitude, lng: longitude }} />}
    {coordinates &&
      coordinates.length > 0 &&
      coordinates.map((coordinate, index) => (
        <Marker
          label={index + 1}
          key={`${coordinate.lat}${coordinate.lng}`}
          // opacity={0.5}
          position={coordinate}
          icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png"
        />
      ))}
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
  connect(({ chart: { coordinates } }) => ({ coordinates })),
)(MyMap);
