import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
  cloud_name: "cloud-juan",
  api_key: "988621859218217",
  api_secret: "kY9w6J3uUvyGrxFHQPrWbmShWww"
})

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(
    filePath,
    {folder: 'posts'}
  )
}

export const deleteImage = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId)
}