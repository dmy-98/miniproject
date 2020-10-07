'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Cast extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Cast.init({
        name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Full Name must be filled!"
                }
            }
        },
        image: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Image must be filled!"
                }
            }
        }
    }, {
        sequelize,
        modelName: 'Cast',
    });
    return Cast;
};