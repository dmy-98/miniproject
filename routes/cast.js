const { Router } = require('express');
const router = Router();
const Auth = require('../middlewares/auth');
const CastController = require('../controllers/Cast');
const { uploadCast } = require('../middlewares/multer');


router.get('/', Auth.authentication, Auth.isAdmin, CastController.listCast);
router.post('/', Auth.authentication, Auth.isAdmin, uploadCast.single('image'), CastController.addCast);
router.get('/:id', Auth.authentication, Auth.isAdmin, CastController.editFormCast);
router.put('/:id', Auth.authentication, Auth.isAdmin, uploadCast.single('image'), CastController.editCast);
router.delete('/:id', Auth.authentication, Auth.isAdmin, CastController.deleteCast);

module.exports = router;