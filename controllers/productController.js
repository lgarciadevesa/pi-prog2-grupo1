const bandas = require('../data/products');

const productosController = {

    listar: function (req, res) {
        return res.render('productos', { productos: productos.lista });

    },

    

    id: function(req, res) {
        let idBuscado = Number(req.params.id);
        let productoPorId = null;

        for (let i = 0; i < productos.lista.length; i++) {
            if (productos.lista[i].id === idBuscado) {
                productoPorId = productos.lista[i];
            }
        }

        return res.render("product", {
            productos: productoPorId,
            titulo: "Detalles del producto " + idBuscado
        });
    }
};