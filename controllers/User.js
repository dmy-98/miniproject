const { User } = require('../models');
const { decryptPwd } = require('../helpers/bcrypt');
const { tokenGenerator } = require('../helpers/jwt');

class UserController {
    static async listUser(req, res) {
        try {
            const users = await User.findAll({
                order: [
                    ['id', 'ASC']
                ]
            });
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async register(req, res) {
        const { fullName, email, password } = req.body;
        const profilePicture = req.file.path;
        try {
            const check = await User.findOne({
                where: { email }
            });
            if (check) {
                res.status(409).json("Email already registered!");
            } else {
                const user = await User.create({
                    fullName,
                    email,
                    password,
                    profilePicture
                });
                const access_token = tokenGenerator(user)
                res.status(201).json({ access_token });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async login(req, res) {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({
                where: { email }
            });
            if (user) {
                if (decryptPwd(password, user.password)) {
                    const access_token = tokenGenerator(user)
                    res.status(200).json({ access_token });
                } else {
                    res.status(400).json("Password incorrect!")
                }
            } else {
                res.status(404).json("User not found!");
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }


    static async editFormUser(req, res) {
        const id = req.userData.id
        try {
            const user = await User.findOne({
                where: { id }
            });
            res.status(200).json(user);
        } catch {
            res.status(500).json(err);
        }
    }

    static async editUser(req, res) {
        const id = req.userData.id;
        const { fullName } = req.body;
        const profilePicture = req.file.path;
        console.log(req.file)

        try {
            const check = await User.update({
                profilePicture,
                fullName
            }, {
                where: { id }
            });
            res.status(200).json(check);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async deleteUser(req, res) {
        const id = req.userData.id

        try {
            const result = await User.destroy({
                where: { id }
            });
            res.status(202).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = UserController;