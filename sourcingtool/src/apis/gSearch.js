import axios from 'axios';

const KEY = 'AIzaSyBHwCb21AoI0R7pmc0w12nh-M76poo8zwQ';

export default axios.create({
  baseURL: 'https://customsearch.googleapis.com/customsearch/v1',
  params: {
    Key: KEY,
    cx: '014193819890778013754:7bxf3vtwr9g',
    q: '',
    num: 10,
  },
});
