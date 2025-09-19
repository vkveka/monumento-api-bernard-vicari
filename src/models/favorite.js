module.exports = (sequelize, DataTypes) => {
    const Favorite = sequelize.define('Favorite', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users', // doit correspondre au nom du modèle User
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        monumentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Monuments', // doit correspondre au nom du modèle Monument
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
    }, {
        timestamps: true,
    });

    // Favorite.associate = (models) => {
    //     Favorite.belongsTo(models.User, { foreignKey: 'userId' });
    //     Favorite.belongsTo(models.Monument, { foreignKey: 'monumentId' });
    // };

    return Favorite;
};
