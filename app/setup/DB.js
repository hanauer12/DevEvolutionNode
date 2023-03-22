const mongoose = require("mongoose");

connect = () => {
    mongoose.connect("mongodb+srv://root:fds6DSA6Adfwe239q7@mongo.mprdgxm.mongodb.net/mongo")
        .then(() => {
            console.log("Conexão com banco realizada com sucesso")
        })
        .catch((err) => {
            console.log("Deu ruim! ", err);
        });
};

module.exports = {
    connect
};



