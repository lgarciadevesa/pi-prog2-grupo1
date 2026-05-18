module.exports = function(sequelize, DataTypes) {
    const alias = 'Comentario';

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        idProducto: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        idUsuario: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        texto: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    };

    const config = {
        tableName: 'comentarios',
        timestamps: true,
        underscored: false
        
    };

    const Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function(models) {
        // Un comentario pertenece a un producto
        Comentario.belongsTo(models.Producto, {
            as: 'producto',
            foreignKey: 'idProducto'
        });
        // Un comentario pertenece a un usuario
        Comentario.belongsTo(models.Usuario, {
            as: 'autor',
            foreignKey: 'idUsuario'
        });
    };

    return Comentario;
};