const Pool = require('pg').Pool;
require('dotenv').config();

// development
const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
};

// production
const prodConfig = {
  connectionString: process.env.DATABASE_URL, // heroku addon
};

const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === 'production' ? prodConfig : devConfig,
});

module.exports = pool;
