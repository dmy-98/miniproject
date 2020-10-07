const { Router } = require('express');
const router = Router();
const MovieController = require('../controllers/Movie');
const Auth = require('../middlewares/auth');
const { uploadMovie } = require('../middlewares/multer')


router.post('/',
    Auth.authentication, Auth.isAdmin,
    uploadMovie.fields([
        { name: 'trailer', maxCount: 1 }, { name: 'poster', maxCount: 1 }
    ]), MovieController.addMovie);
router.delete('/:id', Auth.authentication, Auth.isAdmin, MovieController.deleteMovie);
router.get('/edit/:id', Auth.authentication, Auth.isAdmin, MovieController.editFormMovie);
router.put('/edit/:id', Auth.authentication, Auth.isAdmin,
    uploadMovie.fields([
        { name: 'trailer', maxCount: 1 }, { name: 'poster', maxCount: 1 }
    ]), MovieController.editMovie);

module.exports = router;