const { Review, User, Movie } = require('../models');
const { paginate } = require('../helpers/paginate');

class ReviewController {
    static async listReview(req, res) {
        try {
            const result = await Review.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async listReviewByMovie(req, res) {
        const MovieId = req.params.MovieId
        const page = req.query.page;
        const limit = 10;

        try {
            const movie = await Movie.findOne({
                where: { id: MovieId },
            });
            const reviews = await Review.findAll({
                where: { MovieId },
                order: [
                    ['id', 'ASC']
                ],
                attributes: ['review', 'rating'],
                include: {
                    model: User,
                    attributes: ['fullName', 'profilePicture']
                }
            });
            let users = [];
            reviews.forEach(review => {
                users.push(review.User)
            });

            // Count Average Rating
            let sum = 0;
            sum = reviews.reduce((a, b) => a.rating + b.rating);
            let rating = sum / reviews.length;

            const result = paginate(page, limit, reviews);
            res.status(200).json({
                "Movie": movie.title,
                "Rating": rating,
                "Review": result
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async listReviewByUser(req, res) {
        const UserId = req.userData.id;
        try {
            const user = await User.findOne({
                where: { id: UserId },
                attributes: ['fullName', 'profilePicture']
            });
            const reviews = await Review.findAll({
                where: { UserId },
                order: [
                    ['id', 'ASC']
                ],
                include: [{
                    model: Movie,
                    attributes: ['title']
                }],
                attributes: ['id', 'rating', 'share']
            });
            res.status(200).json({
                "user": user,
                reviews
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async addReview(req, res) {
        const { review, rating } = req.body;
        const share = Boolean(req.body.share);
        const MovieId = req.params.MovieId;
        const UserId = req.userData.id;

        try {
            const found = await Review.findOne({
                where: {
                    MovieId,
                    UserId
                }
            })
            if (found) {
                res.status(409).json("Can't review this movie again!")
            } else {
                const result = await Review.create({
                    UserId,
                    MovieId,
                    review,
                    rating,
                    share
                })
                res.status(201).json(result)
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async deleteReview(req, res) {
        const id = req.params.id;
        try {
            const result = await Review.destroy({
                where: { id }
            });
            res.status(202).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async editFormReview(req, res) {
        const id = req.params.id;
        try {
            const review = await Review.findOne({
                where: { id }
            });
            res.status(200).json(review);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async editReview(req, res) {
        const id = req.params.id;
        const {
            review,
            rating,
            share
        } = req.body;
        try {
            const result = await Review.update({
                review,
                rating,
                share
            }, {
                where: { id }
            });
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async share(req, res) {
        const UserId = req.userData.id
        try {
            const reviews = await Review.findAll({
                where: { UserId, share: true }
            });
            res.status(200).json(reviews);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}
module.exports = ReviewController;