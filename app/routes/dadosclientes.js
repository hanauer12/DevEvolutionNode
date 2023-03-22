const express = require("express");
const router = express.Router();

const DadosCliente = new (require('../controllers/Dadosclientes'));

const validate = require('./auth/validate');

//colocar o validate para as rota
//funcionando add dados
router.post('/',validate(),  (req, res) => {
    console.log("Rota para criação de Dados clientes", req.body);
    DadosCliente.create(req, res);
}); 
//funcionando
router.get('/',validate(), (req, res) => {
    console.log("Rota de listar todos dados ");
    DadosCliente.find(req, res);
});
//rota de att funcionando
router.put('/:id',validate(), (req, res) => {
    console.log("Rota de atualizar dados por id", req.params.id);
    DadosCliente.updateOne(req, res);
});
//rota de lista por id funcionando
router.get('/:id', validate(), (req, res) => {
    console.log("Rota de listar dados por id ");
    DadosCliente.findOne(req, res);
});
//rota de deleta funcionando
router.delete('/:id',validate(), (req, res) => {
    console.log("Rota para deletar dados por id", req.params.id);
    DadosCliente.deleteOne(req, res);
});

module.exports = router;


