module.exports = function(sequelize, DataTypes) {
    const alias = 'DetalleCompra';

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        idUsuario: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        idProducto: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    const config = {
        tableName: 'detalleCompra',
        timestamps: false,
        underscored: false

    };

    const DetalleCompra = sequelize.define(alias, cols, config);

    DetalleCompra.associate = function(models) {
        // Un detalle pertenece a un usuario (comprador)
        DetalleCompra.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'idUsuario'
        });
        // Un detalle pertenece a un producto
        DetalleCompra.belongsTo(models.Producto, {
            as: 'producto',
            foreignKey: 'idProducto'
        });
    };

    return DetalleCompra;
};