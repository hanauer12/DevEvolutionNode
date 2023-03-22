const UsuarioService = new (require('../services/Usuario'));

module.exports = class Usuario {

    async create(req, res) {
        try {
            const retorno = await UsuarioService.create(req.body);
            res.status(200).json(retorno);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao criar o usuário.', error });
        }
    }

    async token(req, res) {
        try {
            const retorno = await UsuarioService.token(req.body);
            res.json(retorno);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao gerar token.', error });
        }
    }

};