const express = require("express");
const router = express.Router();

const PedidosController = new (require('../controllers/Pedidos'));
const validate = require('./auth/validate');

router.post('/', validate(), (req, res) => {
    console.log("Rota para criação de Pedidos ", req.body);
    PedidosController.create(req, res);
});


router.delete('/:id',validate(), (req, res) => {
    console.log("Rota para deletar pedidos por id", req.params.id);
    PedidosController.deleteOne(req, res);
});

router.put('/:id', validate(), (req, res) => {
    console.log("Rota de atualizar pedidos", req.params.id);
    PedidosController.updateOne(req, res);
});
router.get('/',validate(), (req, res) => {
    console.log("Rota de listar todos pedidos ");
    PedidosController.find(req, res);
});


router.get('/:id',validate(), (req, res) => {
    console.log("Rota de listar produto por id ");
    PedidosController.findOne(req, res);
});


module.exports = router;