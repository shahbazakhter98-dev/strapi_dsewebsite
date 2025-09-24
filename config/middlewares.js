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
      origin: ['https://strapi-dsewebsite.onrender.com', 'https://dsenergize.com'], 
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
