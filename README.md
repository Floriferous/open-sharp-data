# Open SHARP Data

This is a tool to get more insights into FOA's SHARP surveys.

### To update the dataset

* Pull the latest version from [here](http://www.fao.org/in-action/sharp/data/geography/en/) (go to > data, then simply click export)
* Add the file to `web/src/data` with the name `Sharp_Surveys_Data.csv`
* Call `web/src/data/generateNewSummary` from the web app and copy paste the results in `web/src/data/dataColumns`
* Update the Footer.js with the new upload date
