const localData = require('../localData/data');
const products = require('../localData/data');

const productsController = {

    listar: function (req, res) {
        return res.render('products', { products: localData.products });

    },



    id: function(req, res) {
        let idBuscado = Number(req.params.id);
        let productPorId = null;

        for (let i = 0; i < localData.products.length; i++) {
            if (localData.products[i].id === idBuscado) {
                productPorId = localData.products[i];
            }
        }

        return res.render("product", {
            data: productPorId,
            titulo: "Detalles del producto " + idBuscado
        });
    }
};
module.exports = productsController;
