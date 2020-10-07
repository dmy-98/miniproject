const { User, Review } = require('../models')
const { tokenVerifier } = require('../helpers/jwt')

class Auth {
    static async authentication(req, res, next) {
        console.log("Authentication works!")
        const { access_token } = req.headers;

        if (!access_token) {
            res.status(404).json("Token not found!")
        } else {
            try {
                const decode = tokenVerifier(access_token);

                // Mengirim ke handler/middlewares berikutnya
                req.userData = decode
                next();
            } catch (err) {
                res.status(500).json(err)
            }
        }
    }

    static isAdmin(req, res, next) {
        const role = req.userData.role;
        console.log(role)

        if (role == 'admin') {
            next();
        } else {
            res.status(403).json("Access denied!");
        }
    }


    static async authorization(req, res, next) {
        console.log("Authorization works!");
        const id = req.params.id;
        //Dari authentication
        const UserId = req.userData.id
        try {
            const find = await Review.findOne({
                where: {
                    id
                }
            });
            if (find) {
                if (find.UserId === UserId) {
                    next();
                } else {
                    res.status(403).json("User doesn't have access!");
                }
            } else {
                res.status(404).json("Review not found!")
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }
}




module.exports = Auth;