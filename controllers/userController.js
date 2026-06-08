let db = require('../database/models');
let bcrypt = require('bcryptjs');
const op = db.Sequelize.Op;

let usersController = {
    register: function(req, res){
        return res.render('register');
    },

    login: function(req, res){
        return res.render('login');
    },

    processLogin: function(req, res){
        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function(user){
            if(user == null){
                return res.send('No existe un usuario con ese email');
            }

            let passwordOk = bcrypt.compareSync(req.body.password, user.password);

            if(passwordOk == false){
                return res.send('La contraseña es incorrecta');
            }

            req.session.usuarioLogueado = user;

            return res.redirect('/');
        })
        .catch(function(error){
            return res.send(error);
        });
    },

    newUser: function(req, res){
        let passEncriptada = bcrypt.hashSync(req.body.password, 10);

        db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: passEncriptada
        })
        .then(function(){
            return res.redirect('/');
        })
        .catch(function(error){
            if (error.name == "SequelizeUniqueConstraintError") {
                return res.redirect('/users/register');
            }
            return res.send(error);
        });
    },

    edit: function(req, res){
        let id = req.params.id;

        db.User.findByPk(id)
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

        db.User.update(
            {
                name: req.body.name,
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
    },

    logout: function(req, res){
        req.session.destroy();
        return res.redirect('/');
    }
};

module.exports = usersController;