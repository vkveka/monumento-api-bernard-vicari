const { handleError } = require('../../helper');
const { FavoriteModel, MonumentModel } = require('../db/sequelize');
const user = require('../models/user');

module.exports = (app) => {
    app.post('/api/favorites/:monumentId', async (req, res) => {
        const userId = req.user.userId;
        console.log(userId);
        const monumentId = parseInt(req.params.monumentId);

        try {
            // Vérifier que le monument existe
            const monument = await MonumentModel.findByPk(monumentId);
            if (!monument) {
                const message = `Le monument avec l'ID ${monumentId} n'existe pas.`;
                return res.status(404).json({ message, data: null });
            }

            // Vérifier si déjà favori
            const existing = await FavoriteModel.findOne({ where: { userId, monumentId } });
            if (existing) {
                const message = `Le monument avec l'ID ${monumentId} est déjà dans vos favoris.`;
                return res.status(400).json({ message, data: null });
            }

            const favorite = await FavoriteModel.create({ userId, monumentId });
            const message = `Le monument avec l'ID ${monumentId} a été ajouté à vos favoris.`;
            return res.status(201).json({ message, data: favorite });
        } catch (error) {
            console.log(error);
            const message = "Impossible d'ajouter ce monument aux favoris. Réessayez dans quelques instants.";
            return handleError(res, error, message);
        }
    });
};
