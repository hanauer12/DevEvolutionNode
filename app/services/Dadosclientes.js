const modeldadoscliente = require('../models/dadosclientes');

module.exports = class DadosCliente {
//funcionando criação por id
  async create(body) {
      const dados = await modeldadoscliente.create(body);
      return dados;
  }
//deletar por id
  async deleteOne(_idPedido) {
      const dados = await modeldadoscliente.deleteOne({_id: _idPedido});
      return dados;
  }
//att produto por id ok
  async updateOne(_idPedido, body) {
      const dados = await modeldadoscliente.updateOne({_id: _idPedido}, {$set: body});
      return dados;
  }
// listar tudo
  async find() {
      const dados = await modeldadoscliente.find();
      return dados;
  }

//listar por id 
  async findOne(_idPedido) {
      const dados = await modeldadoscliente.findOne({_id: _idPedido});
      return dados;
  }


};