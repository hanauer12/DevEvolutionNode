const express = require("express");
const router = express.Router();

const UsuariosController = new (require('../controllers/Usuario'));

router.post('/', (req, res) => {
    console.log("Rota de criação de usuario ", req.body);
    UsuariosController.create(req, res);
});



router.get('/token', (req, res) => {
    console.log("Rota para pegar Toker ");
    UsuariosController.token(req, res);
});


module.exports = router;