// lib/db.js
import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';

config();

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Check if the connection is successful
pool
  .query('SELECT 1')
  .then(() => console.log('Database connected successfully!'))
  .catch((err) => console.error('Error connecting to database:', err));

export default pool;

