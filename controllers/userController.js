let db = require('../database/models');
let bcrypt = require('bcryptjs');

let usersController = {
    register: function(req, res){
        return res.render('register');
    },

    login: function(req, res){
        return res.render('login');
    },

    processLogin: function(req, res){
        db.Usuario.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function(user){
            if(user == null){
                return res.send('No existe un usuario con ese email');
            }

            let passwordOk = bcrypt.compareSync(req.body.password, user.contrasenna);

            if(passwordOk == false){
                return res.send('La contraseña es incorrecta');
            }

            return res.redirect('/');
        })
        .catch(function(error){
            return res.send(error);
        });
    },

    newUser: function(req, res){
    let passEncriptada = bcrypt.hashSync(req.body.password, 10);
console.log(req.body);
    db.Usuario.create({
        usuario: req.body.usuario,
        email: req.body.email,
        contrasenna: passEncriptada
    })
    .then(function(){
        return res.redirect('/');
    })
    .catch(function(error){
        return res.send(error);
    });
},

    edit: function(req, res){
        let id = req.params.id;

        db.Usuario.findByPk(id)
        .then(function(resultado){
            if(resultado == null){
                return res.send('No existe un usuario con ese id');
            }

            return res.render('editUser', { user: resultado });
        })
        .catch(function(error){
            return res.send(error);
        });
    },

    update: function(req, res){
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
        .then(function(){
            return res.redirect('/');
        })
        .catch(function(error){
            return res.send(error);
        });
    }
};

module.exports = usersController;