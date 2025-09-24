// path: ./config/middlewares.js

module.exports = [
  'strapi::errors',
  'strapi::cors', // CORS enabled
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      headers: '*',
      // --- Use YOUR port: 8080 ---
      origin: ['http://localhost:8080', 'http://localhost:1337'], 
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
