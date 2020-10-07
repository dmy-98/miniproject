const { Router } = require('express');
const router = Router();
const Auth = require('../middlewares/auth');
const { uploadUser } = require('../middlewares/multer');

const UserController = require('../controllers/User')

router.get('/', Auth.authentication, Auth.isAdmin, UserController.listUser);
router.get('/edit', Auth.authentication, UserController.editFormUser);
router.put('/edit', uploadUser.single('profilePicture'), Auth.authentication, UserController.editUser);
router.delete('/', Auth.authentication, UserController.deleteUser);


module.exports = router;