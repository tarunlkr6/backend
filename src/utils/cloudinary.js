import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.LOUDINARY_API_KEY,
    api_seceret: process.env.CLOUDINARY_API_SECRET,
});
