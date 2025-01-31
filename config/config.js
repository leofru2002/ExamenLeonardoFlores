const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  cors: process.env.CORS || '*',
  db: {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
  },

};
module.exports = { config }; // Exportar el objeto config
