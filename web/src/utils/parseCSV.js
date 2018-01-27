import Papa from 'papaparse';

export const handleCSV = file => new Promise((resolve, reject) => {
  Papa.parse(file, {
    complete: (results) => {
      resolve(results);
    },
    error: (error) => {
      reject(error);
    },
  });
});
