const { Router } = require('express');
const router = Router();
const Auth = require('../middlewares/auth');
const MovieCastController = require('../controllers/MovieCast');

router.get('/', Auth.authentication, Auth.isAdmin, MovieCastController.listMovieCast);
router.post('/', Auth.authentication, Auth.isAdmin, MovieCastController.addMovieCast);
router.get('/movie/:movie', MovieCastController.findByMovie);
router.get('/cast/:cast', MovieCastController.findByCast);
router.get('/edit/:edit', Auth.authentication, Auth.isAdmin, MovieCastController.editMovieCastForm)
router.put('/edit/:edit', Auth.authentication, Auth.isAdmin, MovieCastController.editMovieCast)
router.delete('/:id', Auth.authentication, Auth.isAdmin, MovieCastController.deleteMovieCast);

module.exports = router;