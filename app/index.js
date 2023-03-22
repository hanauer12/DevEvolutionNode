const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json()); //usado para a aplica��o trabalhar/receber os dados em JSON

const DB = require('./setup/DB');
DB.connect();



const pedidosRoutes = require('./routes/pedidos'); //require do arquivo de rotas de pedidos
app.use('/pedidos', pedidosRoutes); 

const produtosRoutes = require('./routes/produtos'); //require do arquivo de rotas dos produtos
app.use('/produtos', produtosRoutes); 

const usuariosRoutes = require('./routes/usuarios'); //require do arquivo de rotas dos usuarios
app.use('/usuarios', usuariosRoutes); 

const DadosClienteRoutes = require('./routes/dadosclientes'); //require do arquivo de rotas dos dados  dos clientes
app.use('/dadosclientes', DadosClienteRoutes); 

const CriacaoautomaticaRouter = require('./routes/criacaoautomatica'); //require do arquivo de criação automatica de produtos
app.use('/criacaoautomatica', CriacaoautomaticaRouter); 

app.get('/', (req, res) => {
   res.send('Seja bem-vindo à API de Controle de Pedidos e Produtos!');
});

app.listen(3000, () => {
  console.log("Aplicacao rodando!");
});