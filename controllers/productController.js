const products = require('../data/products');

const productsController = {

    listar: function (req, res) {
        return res.render('products', { products: products.lista });

    },

    

    id: function(req, res) {
        let idBuscado = Number(req.params.id);
        let productPorId = null;

        for (let i = 0; i < products.lista.length; i++) {
            if (products.lista[i].id === idBuscado) {
                productPorId = products.lista[i];
            }
        }

        return res.render("product", {
            products: productPorId,
            titulo: "Detalles del producto " + idBuscado
        });
    }
};
module.exports = productsController;