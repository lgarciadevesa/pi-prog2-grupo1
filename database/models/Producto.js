module.exports = function(sequelize, DataTypes) {
    const alias = 'Producto';

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        imagenProducto: {
            type: DataTypes.STRING(1000),
            allowNull: true
        },
        nombreProducto: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        descripcionProducto: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        marcaProducto: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        idUsuario: {
            type: DataTypes.INTEGER.UNSIGNED,
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
            allowNull: true,
            
        }
    };

    const config = {
        tableName: 'products',
        timestamps: true,
        underscored: false
        
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        // Un producto pertenece a un usuario (vendedor)
        Producto.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'idUsuario'
        });
        // Un producto tiene muchos comentarios
        Producto.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'idProducto'
        });
        // Un producto aparece en muchos detalles de compra
        Producto.hasMany(models.DetalleCompra, {
            as: 'compras',
            foreignKey: 'idProducto'
        });
    };

    return Producto;
};