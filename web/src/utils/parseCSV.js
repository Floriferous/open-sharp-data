import Papa from 'papaparse';

const validateData = (data) => {
  if (!data.length) {
    throw new Error('INVALID_DATA_ARRAY');
  }
  if (data.length < 2) {
    console.log(data.length);
    throw new Error('INVALID_DATA_SIZE');
  }

  if (data[0].length !== data[1].length) {
    throw new Error('ARRAY_NOT_SAME_SIZE');
  }
};

export const setupData = (data) => {
  validateData(data);

  return data[0].reduce(
    (accumulator, columnLabel, index) => ({ ...accumulator, [columnLabel]: data[1][index] }),
    {},
  );
};

export const structureData = (data) => {
  const structuredData = setupData(data.data);
  return { ...data, data: structuredData };
};

export const handleCSV = file =>
  new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: (results) => {
        resolve(structureData(results));
      },
      error: (error) => {
        reject(error);
      },
    });
  });
