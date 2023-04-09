import { Router } from 'express';
const router = Router();
import carrouselController from '../controllers/carrouselController.js';
import upload from '../../db/uploader.js';


router.route('/').get(carrouselController.getCarrousel);
router.route('/').post(upload.single('image'), carrouselController.postCarrousel);


export default router;