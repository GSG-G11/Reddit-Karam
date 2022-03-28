const { Pool } = require('pg');

let DB_URL;
const node_env = process.env.NODE_ENV;

if (node_env === 'prod') {
  DB_URL = process.env.DATABASE_URL;
} else if (node_env === 'dev') {
  DB_URL = process.env.DB_DEV_URL;
} else {
  throw new Error('DB_URL NOT FOUND!');
}

const connection = new Pool({
  connectionString: DB_URL,
  ssl: node_env === 'prod' ? { rejectUnauthorized: false } : false,
});

module.exports = connection;
