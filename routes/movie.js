const { Router } = require('express');
const router = Router();

const MovieController = require('../controllers/Movie');

router.get('/', MovieController.getMovie);
router.post('/', MovieController.findMovie);
router.get('/genre/:genre', MovieController.filter);
router.get('/:id', MovieController.findMovieById);

module.exports = router;