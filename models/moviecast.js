'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class MovieCast extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            MovieCast.belongsTo(models.Movie);
            MovieCast.belongsTo(models.Cast);
        }
    };
    MovieCast.init({
        MovieId: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: {
                    msg: "Movie Id must be filled!"
                }
            }
        },
        CastId: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: {
                    msg: "Cast Id must be filled!"
                }
            }
        }
    }, {
        sequelize,
        modelName: 'MovieCast',
    });
    return MovieCast;
};