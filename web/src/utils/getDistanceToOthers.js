import getCsvData from './getCsvData';
import { calculateDistance } from './calculateDistance';

const LATITUDE_INDEX = 5;
const LONGITUDE_INDEX = 5;

const getDistanceToOthers = (latitude, longitude) =>
  getCsvData().then((data) => {
    if (data && data.data) {
      const start = new Date().getTime();

      const distances = data.data
        .slice(1)
        .map(column => ({
          ...column,
          distance: calculateDistance(
            {
              latitude: Number.parseFloat(column[LATITUDE_INDEX]),
              longitude: Number.parseFloat(column[LONGITUDE_INDEX]),
            },
            { latitude, longitude },
          ),
        }))
        .filter(value => !Number.isNaN(value.distance))
        .sort((a, b) => a.distance - b.distance);

      const end = new Date().getTime();
      console.log(`time: ${(end - start) / 1000} seconds`);

      // Add the header row back again
      return [data.data[0], ...distances];
    }
  });

export default getDistanceToOthers;
