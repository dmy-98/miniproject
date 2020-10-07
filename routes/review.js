const { Router } = require('express');
const router = Router();
const Auth = require('../middlewares/auth');

const ReviewController = require('../controllers/Review');

router.get('/all', Auth.authentication, Auth.isAdmin, ReviewController.listReview);
router.get('/movie=:MovieId', ReviewController.listReviewByMovie);
router.get('/user', Auth.authentication, ReviewController.listReviewByUser);
router.get('/share', Auth.authentication, ReviewController.share);
router.post('/:MovieId', Auth.authentication, ReviewController.addReview);
router.get('/:id/edit/', Auth.authentication, ReviewController.editFormReview);
router.put('/:id/edit/', Auth.authentication, ReviewController.editReview);
router.delete('/:id', Auth.authentication, Auth.authorization, ReviewController.deleteReview);

module.exports = router;