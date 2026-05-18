module.exports = function(sequelize, DataTypes) {
    const alias = 'Usuario';

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        usuario: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        contrasenna: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        fotoPerfil: {
            type: DataTypes.STRING(1000),
            allowNull: true
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
        tableName: 'usuarios',
        timestamps: true,
        underscored: false
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {
        // Un usuario tiene muchos productos
        Usuario.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'idUsuario'
        });
        // Un usuario tiene muchos comentarios
        Usuario.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'idUsuario'
        });
        // Un usuario tiene muchos detalles de compra
        Usuario.hasMany(models.DetalleCompra, {
            as: 'compras',
            foreignKey: 'idUsuario'
        });
    };

    return Usuario;
};