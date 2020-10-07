const { Movie } = require('../models');
const { Op } = require('sequelize');
const { paginate } = require('../helpers/paginate');

class MovieController {
    static async getMovie(req, res) {
        const page = Number(req.query.page);
        const limit = 10;
        try {
            const movies = await Movie.findAll({
                order: [
                    ['id', 'ASC']
                ]
            });
            const result = paginate(page, limit, movies);

            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async findMovie(req, res) {
        const { title } = req.body;
        try {
            const found = await Movie.findOne({
                where: {
                    title: {
                        [Op.iLike]: '%' + title + '%'
                    }
                }
            });
            if (!found) {
                res.status(404).json(`'${title}' not found!`)
            } else {
                const movies = await Movie.findAll({
                    where: {
                        title: {
                            [Op.iLike]: '%' + title + '%'
                        }
                    }
                });
                res.status(200).json(movies);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async findMovieById(req, res) {
        const { id } = req.params;
        try {
            const found = await Movie.findAll({
                where: { id }
            });
            res.status(200).json(found);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async filter(req, res) {
        const { genre } = req.params;
        try {
            const found = await Movie.findAll({
                where: {
                    genre
                }
            });
            res.status(200).json(found);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async addMovie(req, res) {
        const { title, synopsis, genre, releaseDate, director, featuredSong, budget } = req.body;
        const trailer = req.files.trailer[0].path;
        const poster = req.files.poster[0].path;
        try {
            const found = await Movie.findOne({
                where: { title }
            });
            if (found) {
                res.status(409).json("Movie already exist!")
            } else {
                const movie = await Movie.create({
                    title,
                    synopsis,
                    trailer,
                    poster,
                    genre,
                    releaseDate,
                    director,
                    featuredSong,
                    budget
                })
                res.status(201).json(movie);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async deleteMovie(req, res) {
        const id = req.params.id;
        try {
            const hapus = await Movie.destroy({
                where: { id }
            })
            res.status(202).json(hapus)
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async editFormMovie(req, res) {
        const id = req.params.id;
        try {
            const movie = await Movie.findOne({
                where: { id }
            });
            res.status(200).json(movie)
        } catch (err) {
            res.json(500).json(err)
        }
    }

    static async editMovie(req, res) {
        const id = req.params.id;
        const trailer = req.files.trailer[0].path;
        const poster = req.files.poster[0].path;
        const { title, synopsis, genre, releaseDate, director, featuredSong, budget } = req.body;
        try {
            const update = await Movie.update({ title, synopsis, trailer, poster, genre, releaseDate, director, featuredSong, budget }, {
                where: { id }
            });
            res.status(200).json(update);
        } catch (err) {
            res.json(500).json(err);
        }
    }

}

module.exports = MovieController;