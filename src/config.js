/* eslint-disable max-len */

if (process.env.BROWSER) {
  throw new Error(
    'Do not import `config.js` from inside the client-side code.',
  );
}

module.exports = {
  // Node.js app
  port: process.env.PORT || 3000,

  // https://expressjs.com/en/guide/behind-proxies.html
  trustProxy: process.env.TRUST_PROXY || 'loopback',

  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || '',
    // API URL to be used in the server-side code
    serverUrl:
      process.env.API_SERVER_URL ||
      `http://localhost:${process.env.PORT || 3000}`,
  },

  // Database
  databaseUrl: process.env.DATABASE_URL || 'mysql:database.mysql',
  databaseName: process.env.DATABASE_NAME || 'develop',
  databaseUsername: process.env.DATABASE_USERNAME || 'root',
  databasePassword: process.env.DATABASE_PASSWORD || 'root',
  databaseHost: process.env.DATABASE_HOST || 'localhost',

  // Photos files
  libraryPath: `${process.env.PHOTOS_PATH}`,
  paintingsPath: `${process.env.PHOTOS_PATH}/paintings`,
  paintingsMDPath: `${process.env.PHOTOS_PATH}/paintings/md`,
  paintingsSMPath: `${process.env.PHOTOS_PATH}/paintings/sm`,
  sculpturesPath: `${process.env.PHOTOS_PATH}/sculptures`,
  sculpturesMDPath: `${process.env.PHOTOS_PATH}/sculptures/md`,
  sculpturesSMPath: `${process.env.PHOTOS_PATH}/sculptures/sm`,
  drawingsPath: `${process.env.PHOTOS_PATH}/drawings`,
  drawingsMDPath: `${process.env.PHOTOS_PATH}/drawings/md`,
  drawingsSMPath: `${process.env.PHOTOS_PATH}/drawings/sm`,
  miscellaneousPath: `${process.env.PHOTOS_PATH}/miscellaneous`,

  // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

  // Authentication
  auth: {
    jwt: {
      name: process.env.JWT_NAME || 'auth-token',
      secret: process.env.JWT_SECRET || '15htDn-7uU-620Ghhwz',
    },
  },
};
