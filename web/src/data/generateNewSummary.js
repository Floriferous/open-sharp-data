import getCsvData from '../utils/getCsvData';
import summarizeData from '../utils/summarizeData';

const generateNewSummary = () => {
  getCsvData().then((data) => {
    const summary = summarizeData(data.data);

    // Copy paste this log into ./dataColumns file
    console.log(JSON.stringify(summary));
  });
};

export default generateNewSummary;
