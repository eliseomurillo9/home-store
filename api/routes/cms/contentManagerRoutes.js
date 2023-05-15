import { Router } from 'express';
const router = Router();
import postFile from '../../controllers/cms/fileManagerController.js';
import contentManagerController from '../../controllers/cms/contentManagerController.js'
import upload from '../../db/uploader.js';
import { isAuthorized } from '../../auth/auth.js';


router.route('/file').post(isAuthorized, upload.single('image'), postFile);
router.route('/').post(isAuthorized, contentManagerController.postContent);
router.route('/:id').put(isAuthorized, contentManagerController.modifyContent);
router.route('/:contentType').get(contentManagerController.getContent);



export default router;