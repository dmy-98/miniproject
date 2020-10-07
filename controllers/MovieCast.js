const { MovieCast, Movie, Cast } = require('../models')

class MovieCastController {
    static async listMovieCast(req, res) {
        try {
            const result = await MovieCast.findAll({
                order: [
                    ['id', 'ASC']
                ]
            });
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async addMovieCast(req, res) {
        const { MovieId, CastId } = req.body;

        try {
            const found = await MovieCast.findOne({
                where: {
                    MovieId,
                    CastId
                }
            })
            if (found) {
                res.status(409).json("Cast already in that movie!")
            } else {
                const caster = await MovieCast.create({
                    MovieId,
                    CastId
                })
                res.status(201).json(caster)
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async findByMovie(req, res) {
        const MovieId = req.params.movie;
        try {
            const movie = await Movie.findOne({
                where: { id: MovieId }
            });
            const moviecasts = await MovieCast.findAll({
                where: { MovieId },
                include: [Cast]
            })
            let cast = [];
            moviecasts.forEach(moviecast => {
                cast.push(moviecast.Cast)
            });
            res.status(200).json({
                "Movie": movie,
                "Cast": cast
            });
        } catch (err) {
            res.status(500).json(err);
        }

    }

    static async deleteMovieCast(req, res) {
        const id = req.params.id;
        try {
            const result = await MovieCast.destroy({
                where: { id }
            });
            res.status(202).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async editMovieCastForm(req, res) {
        const id = req.params.edit;
        try {
            const result = await MovieCast.findOne({
                where: { id }
            });
            res.status(200).json(result);
        } catch (err) {
            res.json(500).json(err);
        }
    }

    static async editMovieCast(req, res) {
        const id = req.params.edit;
        const { MovieId, CastId } = req.body
        try {
            const find = await MovieCast.findOne({
                where: { MovieId, CastId }
            });
            if (find) {
                res.status(409).json("Cast already in that movie!")
            } else {
                const result = await MovieCast.update({
                    MovieId,
                    CastId
                }, {
                    where: { id }
                });
                res.status(200).json(result);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async findByCast(req, res) {
        const CastId = req.params.cast;
        try {
            const cast = await Cast.findOne({
                where: { id: CastId }
            });
            const moviecasts = await MovieCast.findAll({
                where: { CastId },
                order: [
                    ['MovieId', 'ASC']
                ],
                include: [Movie]
            });
            let movie = [];
            moviecasts.forEach(moviecast => {
                movie.push(moviecast.Movie)
            });
            res.status(200).json({
                "Cast": cast,
                "Movie": movie
            });
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = MovieCastController;