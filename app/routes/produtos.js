const express = require("express");
const router = express.Router();

const ProdutosController = new (require('../controllers/Produtos'));

const validate = require('./auth/validate');



router.post('/', validate(), (req, res) => {
    console.log("Rota para criação de Produto", req.body);
    ProdutosController.create(req, res);
});

router.delete('/:id',validate(), (req, res) => {
    console.log("Rota para deletar produto por id", req.params.id);
    ProdutosController.deleteOne(req, res);
});

router.put('/:id',validate(), (req, res) => {
    console.log("Rota de atualizar produtos por id", req.params.id);
    ProdutosController.updateOne(req, res);
});

router.get('/',validate(), (req, res) => {
    console.log("Rota de listar todos produtos ");
    ProdutosController.find(req, res);
});


router.get('/:id',validate(),  (req, res) => {
    console.log("Rota de listar produto por id ");
    ProdutosController.findOne(req, res);
});


module.exports = router;


