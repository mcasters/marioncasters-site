import fetch from 'node-fetch';

export const types = [
  `
  type NewsItem {
    title: String
    link: String
    author: String
    pubDate: String
    content: String
  }
`,
];

export const queries = [
  `
  news: [NewsItem]
`,
];

// React.js News Feed (RSS)
const url =
  'https://api.rss2json.com/v1/api.json' +
  '?rss_url=https%3A%2F%2Freactjsnews.com%2Ffeed.xml';

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

export const resolvers = {
  RootQuery: {
    news() {
      if (lastFetchTask) {
        return lastFetchTask;
      }

      if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
        lastFetchTime = new Date();
        lastFetchTask = fetch(url)
          .then(response => response.json())
          .then(data => {
            if (data.status === 'ok') {
              items = data.items;
            }

            lastFetchTask = null;
            return items;
          })
          .catch(err => {
            lastFetchTask = null;
            throw err;
          });

        if (items.length) {
          return items;
        }

        return lastFetchTask;
      }

      return items;
    },
  },
};
