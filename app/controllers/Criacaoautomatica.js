const Produto = require('../models/produto');

module.exports = class Criacao {

    async create(req, res) {
        const produtos = req.body.produtos;
        try {
          const produtosCriados = await Produto.create(produtos);
          res.json(produtosCriados);
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Erro ao criar produtos.' });
        }
      }
    }