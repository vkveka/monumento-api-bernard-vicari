const { handleError } = require('../../helper');
const { FavoriteModel } = require('../db/sequelize');

module.exports = (app) => {
    app.delete('/api/favorites/:monumentId', async (req, res) => {
        const userId = req.user.userId;
        const monumentId = parseInt(req.params.monumentId);

        try {
            const deleted = await FavoriteModel.destroy({ where: { userId, monumentId } });

            if (!deleted) {
                const message = `Le monument avec l'ID ${monumentId} n'est pas dans vos favoris.`;
                return res.status(404).json({ message, data: null });
            }

            const message = `Le monument avec l'ID ${monumentId} a été retiré de vos favoris.`;
            return res.json({ message, data: monumentId });
        } catch (error) {
            console.log(error);
            const message = "Impossible de supprimer ce favori. Réessayez dans quelques instants.";
            return handleError(res, error, message);
        }
    });
};
