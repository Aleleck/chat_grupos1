const mongoose = require('mongoose');

const GrupoSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true
    }
});


const Grupo = mongoose.model('Grupo', GrupoSchema);

module.exports = Grupo;