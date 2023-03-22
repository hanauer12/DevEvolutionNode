const mongoose = require('mongoose');

const produtoSchema = mongoose.Schema({
    nome: { type: String, required: true },
    tamanho: String,
    preco: { type: Number, required: true },
    quantidade: String,
    descricao: String,
    
});

module.exports = mongoose.model('produto', produtoSchema, 'produtos');