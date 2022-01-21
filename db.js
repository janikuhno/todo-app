const Pool = require('pg').Pool;
require('dotenv').config();

// development
const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

// production
const proConfig = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === 'production' ? proConfig : devConfig,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
