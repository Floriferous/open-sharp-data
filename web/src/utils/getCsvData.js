import Papa from 'papaparse';

const mainCsvFile = require('../data/Sharp_Surveys_Data.csv');

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

const getCsvData = file =>
  new Promise((resolve, reject) => {
    const defaultFile = mainCsvFile;
    readTextFile(file || defaultFile, (csv) => {
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

export default getCsvData;
