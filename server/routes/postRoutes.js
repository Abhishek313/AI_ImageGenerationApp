import express from 'express'
import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'
import Post from '../models/post.js'

dotenv.config();

export const router = express.Router();




