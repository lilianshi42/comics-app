/**
 * This data-service will handle the process of getting data from given url, and transform the data
 * to be sent to front end, with an additional counter property.
 */

const axios = require("axios");

//use this array to keep tracking of same image's view counts
var counterArray = [];

function findData(num) {
  let data = counterArray.find((obj) => {
    return obj.num === num;
  });
  return data;
}

function getCount(num) {
  return findData(num).count;
}

function addCount(num) {
  let index = counterArray.findIndex((obj) => {
    return obj.num === num;
  });
  counterArray[index].count++;
}

function pushNewData(num) {
  counterArray.push({
    num: num,
    count: 1,
  });
}

module.exports = function DataService(url, res) {
  axios
    .get(url)
    .then((response) => response.data)
    .then((data) => {
      let count = 1;
      if (!findData(data.num)) {
        pushNewData(data.num);
      } else {
        addCount(data.num);
        count = getCount(data.num);
      }

      res.json({
        num: data.num,
        img: data.img,
        alt: data.alt,
        title: data.title,
        transcript: data.transcript,
        year: data.year,
        month: data.month,
        day: data.day,
        viewCount: count,
      });
    })
    .catch((err) => console.log(err));
};
