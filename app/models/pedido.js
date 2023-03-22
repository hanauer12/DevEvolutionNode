const mongoose = require('mongoose');

const pedidoSchema = mongoose.Schema({
    pedidoId: { type: String, required: true },
    dadoscliente:{type: mongoose.Schema.Types.ObjectId, ref: 'dadoscliente'},
    produto: {type: mongoose.Schema.Types.ObjectId, ref: 'produto'},
    pagamento: { type: [String],enum: ['dinheiro', 'cartao', 'pix'],required: true },
    observacao: String, 
});
    // Gera o valor para pedidoId
pedidoSchema.pre('save', function(next) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const random = Math.floor(Math.random() * 5000);
    const pedidoId = `${year}${month}${day}${hour}${minute}${second}${random}`;
    this.pedidoId = pedidoId;
    next();
    });
    
module.exports = mongoose.model('pedido', pedidoSchema, 'pedidos');



