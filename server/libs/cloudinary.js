import {v2 as cloudinary} from 'cloudinary'
import { CLOUDINARY } from '../config.js'

cloudinary.config({
  cloud_name: CLOUDINARY.CLOUD_NAME,
  api_key: CLOUDINARY.API_KEY,
  api_secret: CLOUDINARY.API_SECRET,
  secure: true
})

const options = {
  // use_filename: true,
  // unique_filename: false,
  // overwrite: true,
  folder: 'posts'
};

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(
    filePath, options
  )
}

export const deleteImage = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId)
}