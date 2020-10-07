const { Router } = require('express');
const router = Router();
const UserController = require('../controllers/User');
const castRoutes = require('./cast');
const AdminMovieRoutes = require('./adminMovie');
const MovieCastRoutes = require('./moviecast');

router.get('/', UserController.listUser);
router.use('/movies', AdminMovieRoutes);
router.use('/casts', castRoutes);
router.use('/movie-cast', MovieCastRoutes);

module.exports = router;