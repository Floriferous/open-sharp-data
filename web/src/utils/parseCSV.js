import Papa from 'papaparse';

const validateData = (data) => {
  if (!data.length) {
    throw new Error('INVALID_DATA_ARRAY');
  }
  if (data.length !== 2) {
    throw new Error('INVALID_DATA_SIZE');
  }

  if (data[0].length !== data[1].length) {
    throw new Error('ARRAY_NOT_SAME_SIZE');
  }
};

const setupData = (data) => {
  validateData(data);

  return data[0].reduce(
    (accumulator, columnLabel, index) => ({ ...accumulator, [columnLabel]: data[1][index] }),
    {},
  );
};

export const handleCSV = file =>
  new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: (results) => {
        const structuredData = setupData(results.data);

        resolve({ ...results, data: structuredData });
      },
      error: (error) => {
        reject(error);
      },
    });
  });
