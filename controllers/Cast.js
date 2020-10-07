const { Cast } = require('../models')

class CastController {
    static async listCast(req, res) {
        try {
            const result = await Cast.findAll({
                order: [
                    ['id', 'ASC']
                ],
            })
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async addCast(req, res) {
        const { name } = req.body;
        const image = req.file.path
        try {
            const found = await Cast.findOne({
                where: {
                    name
                }
            })
            if (found) {
                res.status(409).json("Name already exist!")
            } else {
                const cast = await Cast.create({
                    name,
                    image
                })
                res.status(201).json(cast)
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async deleteCast(req, res) {
        const id = req.params.id;
        try {
            const result = await Cast.destroy({
                where: { id }
            });
            res.status(202).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async editFormCast(req, res) {
        const id = req.params.id;
        try {
            const cast = await Cast.findOne({
                where: { id }
            });
            res.status(200).json(cast);
        } catch (err) {
            res.json(500).json(err);
        }
    }

    static async editCast(req, res) {
        const id = req.params.id;
        const { name } = req.body;
        const image = req.file.path;
        try {
            const find = await Cast.findOne({
                where: { name }
            });
            if (find.name == name) {
                const result = await Cast.update({
                    name,
                    image
                }, {
                    where: { id }
                });
                res.status(200).json(result);
            } else if (find) {
                res.status(409).json("Name already used!");
            } else {
                const result = await Cast.update({
                    name,
                    image
                }, {
                    where: { id }
                });
                res.status(200).json(result);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = CastController;