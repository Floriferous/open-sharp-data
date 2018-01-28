import getCsvData from './getCsvData';
import { calculateDistance } from './calculateDistance';

const getDistanceToOthers = (latitude, longitude, dataSet, radius) =>
  getCsvData(null, dataSet).then((data) => {
    if (data && data.data) {
      const start = new Date().getTime();

      const latIndex = data.data[0].findIndex(point => point === 'S0_INFO.coords:lat');
      const lonIndex = data.data[0].findIndex(point => point === 'S0_INFO.coords:lon');

      const dataWithDistances = data.data
        .slice(1)
        .map((column) => {
          const distance = calculateDistance(
            {
              latitude: Number.parseFloat(column[latIndex]),
              longitude: Number.parseFloat(column[lonIndex]),
            },
            { latitude, longitude },
          );
          if (distance && distance < radius * 1000) {
            return {
              ...column,
              distance,
            };
          }

          return null;
        })
        .filter(dataPoint => !!dataPoint)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 20);

      const coordinates = dataWithDistances.map(column => ({
        lat: Number.parseFloat(column[latIndex]),
        lng: Number.parseFloat(column[lonIndex]),
      }));

      const end = new Date().getTime();
      console.log(`time: ${(end - start) / 1000} seconds`);

      // Add the header row back again
      return { data: [data.data[0], ...dataWithDistances], coordinates };
    }
  });

export default getDistanceToOthers;
