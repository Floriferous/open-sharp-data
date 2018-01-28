import Papa from 'papaparse';
import { MAIN_SET } from '../reducers/chart';

const mainCsvFile = require('../data/Sharp_Surveys_Data.csv');
const ugandaCsvFile = require('../data/Uganda_survey_data.csv');

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

const getCsvData = (file, dataSet) =>
  new Promise((resolve, reject) => {
    console.log('getCsvData() file:', file);
    const defaultFile = dataSet === MAIN_SET ? mainCsvFile : ugandaCsvFile;
    console.log('defaultFile: ', defaultFile);
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
