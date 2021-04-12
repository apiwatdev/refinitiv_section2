const axios = require("axios");
const url = `https://codequiz.azurewebsites.net/`;
const cheerio = require("cheerio");
const processStart = async function (code) {
  let $;
  let rawHtml = ``;
  let result = {
    fundName: null,
    nav: null,
    bid: null,
    offer: null,
    change: null,
  };
  await axios
    .get(url, {
      headers: {
        Cookie: "hasCookie=true",
      },
    })
    .then((res) => {
      rawHtml = res.data;
    });
  $ = cheerio.load(rawHtml, null, false);
  $(`table > tbody > tr`).each(function () {
    if ($(this).children("td:first").text() === code) {
      result.fundName = $(this).children("td:eq(0)").text();
      result.nav = $(this).children("td:eq(1)").text();
      result.bid = $(this).children("td:eq(2)").text();
      result.offer = $(this).children("td:eq(3)").text();
      result.change = $(this).children("td:eq(4)").text();
    }
  });

  console.log(result.nav);
};

processStart(process.argv[2]);

// HOW TO RUN 
// exp. node index B-INCOMESSF