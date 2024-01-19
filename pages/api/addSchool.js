// pages/api/addSchool.js
import pool from '../../lib/db';
import { IncomingForm } from 'formidable';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import multer from 'multer';  // Add this line to import multer

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/schoolImages');
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    const form = new IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing form:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      const { name, address, city, state, contact, email_id } = fields;
      const imagePath = files.image ? `/schoolImages/${uuidv4()}-${files.image.name}` : null;

      try {
        if (imagePath) {
          fs.writeFileSync(`public${imagePath}`, fs.readFileSync(files.image.path));
        }

        const result = await pool.query(
          'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [name, address, city, state, contact, imagePath, email_id]
        );

        console.log('School added successfully:', result);

        return res.status(200).json({ message: 'School added successfully' });
      } catch (error) {
        console.error('Internal Server Error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    });
  } catch (error) {
    console.error('Internal Server Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
