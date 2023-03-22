const PedidoService = new (require('../services/Pedido'));

module.exports = class Pedidos {

    async create(req, res) {
        try {
            const retorno = await PedidoService.create(req.body);
            res.status(200).json(retorno);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao criar o pedido.', error });
        }
    }

    async deleteOne(req, res) {
        try {
            const retorno = await PedidoService.deleteOne(req.params.id);
            res.json(retorno);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao deletar o pedido.', error });
        }
    }

    async updateOne(req, res) {
        if (!req.params.id) {
            return res.status(400).json({ message: 'ID do pedido não fornecido.' });
        }
    
        try {
            const retorno = await PedidoService.updateOne(req.params.id, req.body);
            res.json(retorno);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao atualizar o pedido.', error });
        }
    }
    
    async find(req, res) {
        try {
            const retorno = await PedidoService.find(req.body);
            res.json(retorno);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar pedidos.', error });
        }
    }

    async findOne(req, res) {
        try {
            const retorno = await PedidoService.findOne(req.params.id);
            res.json(retorno);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar o pedido.', error });
        }
    }
};
