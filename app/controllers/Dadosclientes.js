const DadosClienteService = new (require('../services/Dadosclientes'));

module.exports = class Dadoscliente {

    async create(req, res) {
        try {
            const retorno = await DadosClienteService.create(req.body);
            res.json(retorno);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao criar dados do cliente.', error });
        }
    }
    
    async deleteOne(req, res) {
        try {
            const retorno = await DadosClienteService.deleteOne(req.params.id);
            res.json(retorno);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao deletar dados do cliente.', error });
        }
    }

    async updateOne(req, res) {
        try {
            const retorno = await DadosClienteService.updateOne(req.params.id, req.body);
            res.json(retorno);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao atualizar dados do cliente.', error });
        }
    }

    async find(req, res) {
        try {
            const retorno = await DadosClienteService.find(req.body);
            res.status(200).json(retorno);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao listar dados dos clientes.', error });
        }
    }

    async findOne(req, res) {
        try {
            const retorno = await DadosClienteService.findOne(req.params.id);
            res.json(retorno);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao listar dados do cliente.', error });
        }
    }

};