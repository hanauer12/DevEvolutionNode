const modelPedido = require('../models/pedido');

module.exports = class pedido {
    //rota para criar pedido
    async create(body) {
        try {
            const pedido = await modelPedido.create(body);
            return pedido;
        } catch (error) {
            throw error;
        }
    }
//rota de deletar pedido
    async deleteOne(_idPedido) {
        try {
            const pedido = await modelPedido.deleteOne({_id: _idPedido});
            return pedido;
        } catch (error) {
            throw error;
        }
    }
//rota para atualizar pedido
    async updateOne(_idPedido, body) {
        try {
            const pedido = await modelPedido.updateOne({_id: _idPedido}, {$set: body});
            return pedido;
        } catch (error) {
            throw error;
        }
    }
//rota para listar todos pedidos
    async find() {
        try {
            const pedidos = await modelPedido.find().populate({path:'produto' ,select: 'produto tamanho quantidade  -_id'}).populate({ path: 'dadoscliente', select: 'nome email  telefone cpf  CEP  cidade  bairro rua numero complemento  -_id'}).exec(); 
            return pedidos;
        } catch (error) {
            throw error;
        }
    }
//rota para listar  pedido por id

    async findOne(_idPedido) {
        try {
            const pedidos = await modelPedido.findOne({_id: _idPedido}).populate({path:'produto' ,select: 'produto tamanho quantidade  -_id'}).populate({ path: 'dadoscliente', select: 'nome email  telefone cpf  CEP  cidade  bairro rua numero complemento  -_id'}).exec(); 
            return pedidos;
        } catch (error) {
            throw error;
        }
    }
};
