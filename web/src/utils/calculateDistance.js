// Converts numeric degrees to radians
const toRad = Value => Value * Math.PI / 180;

// Returns a distance in meters between 2 sets of GPS coordinates
export const calculateDistance = (
  { latitude: lat1, longitude: lon1 },
  { latitude: lat2, longitude: lon2 },
) => {
  const R = 6371000; // m
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const lat1Rad = toRad(lat1);
  const lat2Rad = toRad(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1Rad) * Math.cos(lat2Rad);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};

// Takes a distance number, and converts it to a string with m or km appended
// depending on the distance.
const toDistanceString = (dist) => {
  if (dist <= 0) {
    return '0 m';
  } else if (!dist) {
    return null;
  } else if (dist < 1000) {
    return `${Math.round(dist / 10) * 10} m`;
  } else if (dist < 10000) {
    return `${(Math.round(dist / 100) / 10).toFixed(1)} km`;
  }

  return `${Math.round(dist / 1000)} km`;
};

const getDistanceString = (location1, location2) =>
  toDistanceString(calculateDistance(location1, location2));

export default getDistanceString;
