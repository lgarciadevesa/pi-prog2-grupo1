let db = require('../database/models');
let bcrypt = require('bcryptjs');


let usersController = {
  register: function (req, res) {
    return res.render('register');
  },

  login: function (req, res) {
    return res.render('login');
  },

  processLogin: function (req, res) {
    let email = req.body.email;
    let password = req.body.password;

    db.Usuario.findOne({
      where: {
        email: email
      }
    })
      .then(function (user) {
        if (user) {
          let isPasswordValid = bcrypt.compareSync(password, user.contrasenna);
          if (isPasswordValid) {
            req.session.user = user;
            if (req.body.rememberMe) {
              res.cookie('userId', user.id, { maxAge: 1000 * 60 * 60 * 24 * 30 });
            }
            return res.redirect('/');
          } else {
            return res.render('login', { errors: [{ message: 'Contraseña incorrecta' }] });
          }
        } else {
          return res.render('login', { errors: [{ message: 'Usuario no encontrado' }] });
        }
      })
      .catch(function (error) {
        console.log(error);
        res.render('login', { errors: [{ message: 'Error en el servidor' }] });
      });
  },

  newUser: function (req, res) {
    let passEncriptada = bcrypt.hashSync(req.body.password, 10);
    console.log(req.body);
    db.Usuario.create({
      usuario: req.body.usuario,
      email: req.body.email,
      contrasenna: passEncriptada
    })
      .then(function () {
        return res.redirect('/users/login');
      })
      .catch(function (error) {
        return res.send(error);
      });
  },

  edit: function (req, res) {
    let id = req.params.id;

    db.Usuario.findByPk(id)
      .then(function (resultado) {
        if (resultado == null) {
          return res.send('No existe un usuario con ese id');
        }

        return res.render('editUser', { user: resultado });
      })
      .catch(function (error) {
        return res.send(error);
      });
  },

  update: function (req, res) {
    let id = req.params.id;

    db.Usuario.update(
      {
        usuario: req.body.usuario,
        email: req.body.email
      },
      {
        where: {
          id: id
        }
      }
    )
      .then(function () {
        return res.redirect('/');
      })
      .catch(function (error) {
        return res.send(error);
      });
  },

  logout: function(req,res){
         req.session.destroy();
    res.redirect('/');
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
          usuario: req.session.user
        });
      })
      .catch(function(error) {
        res.send(error);
      });
  } ,
};

module.exports = usersController;