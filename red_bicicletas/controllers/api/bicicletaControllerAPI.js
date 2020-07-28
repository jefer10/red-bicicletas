var Bicicleta =require("../../models/bicicletas");

exports.bicicleta_list=function (req,res) {
    res.status(200).json({
        bicicletas:Bicicleta.allBicis,
    });
}

exports.bicicletas_create= function (req,res) {
    var bici= new Bicicleta(req.body.id,req.body.color,req.body.modelo);
    bici.ubicacion=[req.body.latitud, req.body.longitud];
    Bicicleta.add(bici);
    res.status(200).json({
        bicicleta: bici,
    });
}

exports.bicicletas_delete=function (req,res) {
    Bicicleta.removeById(req.body.id);
    res.status(204).send();
    
}

exports.bicicletas_update=function (req,res) {
    Bicicleta.updateById(req.body.id,req.body.color,req.body.modelo,req.body.latitud,req.body.longitud);
    res.status(200).json(
        {
            bicicleta:Bicicleta.allBicis,
        }
    );
}