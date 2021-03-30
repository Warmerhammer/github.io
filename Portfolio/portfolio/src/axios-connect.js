import axios from 'axios';

const KEY = 'AIzaSyCaVsXIj9GoOFXXWSj1nB5wZMAkh07qeRk';

export const instance = axios.create({
  baseURL: 'https://portfolio-e7ece-default-rtdb.firebaseio.com/',
  apiKey: KEY,
});

export async function getHeartBeat() {
  const log = await instance
  .get('/HeartBeatCount.json')
  .then(response => response.data)

  return log;
}

var beatCount;
export async function pushHeartBeat() {
  const log = await instance
    .get('/HeartBeatCount.json')
    .then(response => response.data);

  beatCount = log + 1;

  await instance
    .put('/HeartBeatCount.json', beatCount)
    .catch(error => console.log(error));
}
