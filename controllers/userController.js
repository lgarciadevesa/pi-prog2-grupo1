const localData = require('../localData/data');
const { profile } = require('./indexController');

let db = require("../database/models");

const userController = {

  login: function(req, res) {
    res.render('login', {logueado: false} );
  },

  profile: function(req, res) {
    let idBuscado = Number(req.params.id);
    let usuarioPorId = null;

    db.Usuario.findByPk(idBuscado, 
    {
     include: [
    {
      association: 'productos',
      include: [{ association: 'comentarios' }]
    }
    ]
  })
      .then(function(usuario) {
        if (usuario) {
          usuarioPorId = usuario;
        }
        return res.render("profile", {
          data: usuarioPorId,
          products: usuarioPorId.productos,
          logueado: true,
          usuario: localData.usuario
        });
      })
      .catch(function(error) {
        res.send(error);
      });
  } ,

   register: function(req, res) {
    res.render('register', {logueado: false});
  },
  
 

 
 
};

module.exports = userController;