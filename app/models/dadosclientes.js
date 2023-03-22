const mongoose = require('mongoose');

const dadosclientesSchema = mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    telefone: { type: Number, required: true },
    cpf: Number,
    CEP: Number,
    cidade: { type: String, required: true },
    bairro: { type: String, required: true },
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    complemento: { type: String, required: true },
    
});

module.exports = mongoose.model('dadoscliente', dadosclientesSchema, 'dadosclientes');