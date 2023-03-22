const ProdutoService = new (require('../services/Produto'));

module.exports = class Produtos {

    async create(req, res) {
        try {
            const retorno = await ProdutoService.create(req.body);
            res.json(retorno);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao criar o produto.', error });
        }
    }
    
    async deleteOne(req, res) {
        try {
            const retorno = await ProdutoService.deleteOne(req.params.id);
            res.json(retorno);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao excluir o produto.', error });
        }
    }

    async updateOne(req, res) {
        try {
            const retorno = await ProdutoService.updateOne(req.params.id, req.body);
            res.json(retorno);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao atualizar o produto.', error });
        }
    }

    async find(req, res) {
        try {
            const retorno = await ProdutoService.find(req.body);
            res.status(200).json(retorno);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao listar os produtos.', error });
        }
    }

    async findOne(req, res) {
        try {
            const retorno = await ProdutoService.findOne(req.params.id);
            res.json(retorno);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar o produto.', error });
        }
    }
};