// pages/api/showSchools.js
import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT name, address, city, image FROM schools');
      console.log('Database query result:', result[0]);
      res.status(200).json(result[0]);
    } catch (error) {
      console.error('Error querying database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
