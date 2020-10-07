const { Router } = require('express');
const router = Router();

const userRoutes = require('./user');
const UserController = require('../controllers/User');
const { uploadUser } = require('../middlewares/multer');

const adminRoutes = require('./admin');
const movieRoutes = require('./movie');
const reviewRoutes = require('./review');

router.post('/register', uploadUser.single('profilePicture'), UserController.register);
router.post('/login', UserController.login);
router.use('/admin', adminRoutes);
router.use('/users', userRoutes)
router.use('/movies', movieRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;