const modelProduto = require('../models/produto');

module.exports = class Produto {
    async create(body) {
        try {
            const produto = await modelProduto.create(body);
            return produto;
        } catch (error) {
            throw new Error('Erro ao criar o produto.');
        }
    }

    async deleteOne(_idPedido) {
        try {
            const produto = await modelProduto.deleteOne({ _id: _idPedido });
            return produto;
        } catch (error) {
            throw new Error('Erro ao deletar o produto.');
        }
    }

    async updateOne(_idPedido, body) {
        try {
            const produto = await modelProduto.updateOne({ _id: _idPedido }, { $set: body });
            return produto;
        } catch (error) {
            throw new Error('Erro ao atualizar o produto.');
        }
    }

    async find() {
        try {
            const produto = await modelProduto.find();
            return produto;
        } catch (error) {
            throw new Error('Erro ao listar os produtos.');
        }
    }

    async findOne(_idPedido) {
        try {
            const produto = await modelProduto.findOne({ _id: _idPedido });
            return produto;
        } catch (error) {
            throw new Error('Erro ao encontrar o produto.');
        }
    }
};