const Grupo = require('../models/Grupo')

exports.crearGrupo = async (req, res)=>{
    
    try {
        let grupo;

        grupo = new Grupo(req.body);

        await grupo.save();
        res.send(grupo);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }


}