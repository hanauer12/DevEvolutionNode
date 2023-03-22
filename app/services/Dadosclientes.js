const modeldadoscliente = require('../models/dadosclientes');

module.exports = class DadosCliente {

  //rota criar dados clientes
    async create(body) {
        try {
            const dados = await modeldadoscliente.create(body);
            return dados;
        } catch (error) {
            throw error;
        }
    }
//rota de delete por id
    async deleteOne(_idPedido) {
        try {
            const dados = await modeldadoscliente.deleteOne({_id: _idPedido});
            return dados;
        } catch (error) {
            throw error;
        }
    }
//rota de att por id
    async updateOne(_idPedido, body) {
        try {
            const dados = await modeldadoscliente.updateOne({_id: _idPedido}, {$set: body});
            return dados;
        } catch (error) {
            throw error;
        }
    }
//rota para listar todos os clientes
    async find() {
        try {
            const dados = await modeldadoscliente.find();
            return dados;
        } catch (error) {
            throw error;
        }
    }
//rota para listar ppr id  os clientes
    async findOne(_idPedido) {
        try {
            const dados = await modeldadoscliente.findOne({_id: _idPedido});
            return dados;
        } catch (error) {
            throw error;
        }
    }
};
