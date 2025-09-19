const { handleError } = require('../../helper');
const { FavoriteModel, MonumentModel } = require('../db/sequelize');

module.exports = (app) => {
    app.get('/api/favorites', async (req, res) => {
        const userId = req.user.userName;

        try {
            const favorites = await FavoriteModel.findAll({
                where: { userId },
                include: [
                    {
                        model: MonumentModel,
                        as: 'monument',
                        attributes: ['id', 'title', 'country', 'city', 'buildYear', 'picture', 'description'] //OK adapte aux colonnes de ton modèle
                    }
                ]
            });

            const message = `La liste des monuments favoris de l'utilisateur a bien été récupérée.`;
            return res.json({ message, data: favorites.map(f => f.Monument) });
        } catch (error) {
            console.log(error);
            const message = "Impossible de récupérer vos favoris. Réessayez dans quelques instants.";
            return handleError(res, error, message);
        }
    });
};
