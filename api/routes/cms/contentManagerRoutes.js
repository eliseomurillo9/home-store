import { Router } from 'express';
const router = Router();
import postFile from '../../controllers/cms/fileManagerController.js';
import contentManagerController from '../../controllers/cms/contentManagerController.js'
import upload from '../../db/uploader.js';


router.route('/file').post(upload.single('image'), postFile);
router.route('/').post(contentManagerController.postContent);
router.route('/:id').put(contentManagerController.modifyContent);
router.route('/:contentType').get(contentManagerController.getContent);



export default router;