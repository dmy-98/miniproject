const sequelizePaginate = require('sequelize-paginate');

'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Movie extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Movie.belongsToMany(models.User, {
                through: 'models.Review'
            });
            Movie.belongsToMany(models.Cast, {
                through: 'models.MovieCast'
            });
        }
    };
    Movie.init({
        title: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Title must be filled!"
                }
            }
        },
        synopsis: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Synopsis must be filled!"
                }
            }
        },
        trailer: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Trailer must be filled!"
                }
            }
        },
        poster: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Poster must be filled!"
                }
            }
        },
        genre: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Genre must be filled!"
                }
            }
        },
        releaseDate: {
            type: DataTypes.DATE,
            validate: {
                notEmpty: {
                    msg: "Release Date must be filled!"
                }
            }
        },
        director: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Director must be filled!"
                }
            }
        },
        featuredSong: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Featured Song must be filled!"
                }
            }
        },
        budget: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: {
                    msg: "Budget must be filled!"
                }
            }
        }
    }, {
        sequelize,
        modelName: 'Movie',
    });
    sequelizePaginate.paginate(Movie);
    return Movie;
};