// trial web scraper
const axios = require('axios');
const url = 'https://www.lulus.com/products/a-little-romance-pistachio-green-tiered-puff-sleeve-mini-dress/1071262.html';

axios(url)
.then(response => {
  const html = response.data;
  console.log(html);
})
.catch(console.error);
