'use strict';
const {
    Model
} = require('sequelize');
const { encryptPwd } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            User.belongsToMany(models.Movie, {
                through: 'models.Review'
            });
        }
    };
    User.init({
        fullName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Full Name must be filled!"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: {
                    msg: "Please input in email format!"
                },
                notEmpty: {
                    msg: "Email must be filled!"
                },
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Password must be filled!"
                }
            }
        },
        profilePicture: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.STRING
        }
    }, {
        hooks: {
            beforeCreate(user) {
                user.role = "user"
                user.password = encryptPwd(user.password)
            }
        },
        sequelize,
        modelName: 'User',
    });
    return User;
};