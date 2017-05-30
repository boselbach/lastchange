import fetch from 'node-fetch';

let endpoint = "http://www.dr.dk/mu-online/api/1.3/list/view/lastchance";
let limit = 8;
let offset = 0;
let activeChannal = '';

export default {
  get(channel) {
    if (activeChannal !== channel) {
      offset = 0;
    }

    console.log(`${endpoint}?limit=${limit}&offset=${offset}&channel=${channel}`)
    return new Promise((resolve, reject) => {
      fetch(`${endpoint}?limit=${limit}&offset=${offset}&channel=${channel}`)
      .then(response => {
        activeChannal = channel;
        resolve(response.json());
      });
    });
  },
  loadMore(channel) {
    return new Promise((resolve, reject) => {
      offset += limit;
      this.get(channel)
      .then(response => {
        resolve(response);
      });
    });
  }
};