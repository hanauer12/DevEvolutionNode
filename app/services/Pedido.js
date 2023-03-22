const  modelPedido= require('../models/pedido');


module.exports = class pedido {
//funcionando criar produto
    async create(body) {
        const pedido = await modelPedido.create(body);
        return pedido;
    }
//funcionando deletar por id
    async deleteOne(_idPedido) {
        const pedido = await modelPedido.deleteOne({_id: _idPedido});
        return pedido;
    }
//funciona update por id
    async updateOne(_idPedido, body) {
        const pedido = await modelPedido.updateOne({_id: _idPedido}, {$set: body});
        return pedido;
    }
//funciona listar todos pedido
    async find() {
        const pedidos = await modelPedido.find().populate({path:'produto' ,select: 'produto tamanho quantidade  -_id'}).populate({ path: 'dadoscliente', select: 'nome email  telefone cpf  CEP  cidade  bairro rua numero complemento  -_id'}).exec(); 
        return pedidos;
    }


//funcionando listar pedidos
    async findOne(_idPedido) {
        const pedidos = await modelPedido.findOne({_id: _idPedido}).populate({path:'produto' ,select: 'produto tamanho quantidade  -_id'}).populate({ path: 'dadoscliente', select: 'nome email  telefone cpf  CEP  cidade  bairro rua numero complemento  -_id'}).exec(); 
        return pedidos;
    }


    


};