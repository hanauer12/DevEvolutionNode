const  modelUsuario= require('../models/usuario');

const jwt = require("jsonwebtoken");

module.exports = class token {


    async create(body) {
        const usuario = await modelUsuario.create(body);
        return usuario;
    }


    async token(body) {
        const email = body.email;
        const senha = body.senha;

        const usuario = await modelUsuario.findOne({email: email, senha: senha});

        if (usuario) {
            return jwt.sign({
                sub: usuario._id
            }, 'senhasecreta'); //assinatura do token
        } else {
            return {error: "Dados invalidos!"};
        }

    }


};