import Papa from 'papaparse';

const csvFile = require('../data/Sharp_Surveys_Data.csv');

function readTextFile(filePath, callback) {
  const rawFile = new XMLHttpRequest();
  rawFile.open('GET', filePath, false);
  rawFile.onreadystatechange = () => {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status === 0) {
        const allText = rawFile.responseText;
        callback(allText);
      }
    }
  };
  rawFile.send(null);
}

export const getAverages = () =>
  new Promise((resolve, reject) => {
    readTextFile(csvFile, (csv) => {
      Papa.parse(csv, {
        complete: (results) => {
          resolve(results);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  });
