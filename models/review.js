'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Review extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Review.belongsTo(models.User);
            Review.belongsTo(models.Movie);
        }
    };
    Review.init({
        UserId: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: {
                    msg: "User Id must be filled!"
                }
            }
        },
        MovieId: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: {
                    msg: "Movie Id must be filled!"
                }
            }
        },
        review: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Review must be filled!"
                }
            }
        },
        rating: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: {
                    msg: "Rating must be filled!"
                },
                min: 0,
                max: 10
            }
        },
        share: {
            type: DataTypes.BOOLEAN,
            validate: {
                notEmpty: {
                    msg: "Share must be filled!"
                }
            },
        }
    }, {
        sequelize,
        modelName: 'Review',
    });
    return Review;
};