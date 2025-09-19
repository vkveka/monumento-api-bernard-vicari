const { MonumentModel } = require('../db/sequelize');
const { handleError } = require('../../helper');
const getIo = require('../socket').getIo;

module.exports = (app) => {
    app.post('/api/monuments', async (req, res) => {
        const { monument } = req.body;

        try {

            const createdMonument = await MonumentModel.create(monument);

            const message = `Le monument ${createdMonument.title} a bien été créé.`;

            // Émettre l'événement via Socket.io
            const io = getIo();
            io.emit('notification', {
                event: "newMonument",
                data: {
                    id: createdMonument.id,
                    title: createdMonument.title,
                    description: createdMonument.description,
                    createdAt: createdMonument.createdAt
                }
            });
            res.status(201).json({ message, data: createdMonument });

        } catch (error) {
            console.log(error);
            const message = "Le monument n'a pas pu être créé. Réessayez dans quelques instants.";
            return handleError(res, error, message);
        }
    });
}   