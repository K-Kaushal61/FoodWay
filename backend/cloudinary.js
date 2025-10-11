// cloudinary.js (Updated with correct export)

import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

// Configure Cloudinary with your credentials from the .env file
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure the storage engine for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'foodway', // A folder name in your Cloudinary account
    allowed_formats: ['jpeg', 'png', 'jpg'],
  },
});

// Create and export the configured Multer instance as the default export
export default multer({ storage: storage });