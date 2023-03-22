const express = require("express");
const router = express.Router();

const CriacaoautomaticaController = new (require('../controllers/Criacaoautomatica'));

const validate = require('./auth/validate');

router.post('/', validate(), (req, res) => {
    const produtos = [
      { nome: 'Pizza Grande ' , tamanho: 'Grande', preco: 49.99, quantidade: '12 pedaços', descricao: 'Pizza grande de 12 pedaços para toda familia' },
      { nome: 'Pizza Pequena', tamanho: 'Pequena', preco: 29.99, quantidade: '6 pedaços', descricao: 'Pizza pequena de 6 pedaços para toda familia' },
      { nome: 'Pizza Media', tamanho: 'media', preco: 39.00, quantidade: '8 pedaços', descricao: 'Pizza media de 8 pedaços para toda familia' },
      { nome: 'Hamburger Costela', preco: 28.50,  descricao: 'Hamburger de costela defumado' },
      { nome: 'X Salada',  preco: 19.00, descricao: ' X salada' },

    ];
    console.log("Rota para criação de Produto em massa", req.body);
    CriacaoautomaticaController.create({ body: { produtos } }, res);
  });





module.exports = router;

