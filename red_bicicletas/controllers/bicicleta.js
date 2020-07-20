var Bicicleta= require('../models/bicicletas');

/**
 * metodo para renderizar la lista de las bicis
 * respondiendo con el index.pug de la carpeta bicicletas en views
 * pasandole un objeto llamado bicis
 */
exports.bicicleta_list=function(req,res){
    res.render('bicicletas/index',{bicis: Bicicleta.allBicis});
}

/**
 * este metodo para renderizar a la pagina del formulario
 * de creacion de bicicletas "create.pug"
 */
exports.bicicleta_create_get=function(req ,res){
    res.render('bicicletas/create');
}

/**
 * este metodo es para el la creacion de la bicicleta (POST) y visualizan las ciclas.
 * los datos tomados del body de la pagina "create.pug"
 */
exports.bicicleta_create_post=function(req,res){
    var bici =new Bicicleta(req.body.id,req.body.color,req.body.modelo,[req.body.latitud, req.body.longitud]);//id, color, modelo,[lat,long]
    Bicicleta.add(bici);
    res.redirect('/bicicletas');//re-direccionamiento de la pagina
}

/**
 * elimina la cicla que posee el id del  formulario de "index.pug" de la carpeta bicicletas en views
 * @param {*} req el request de la vista
 * @param {*} resp la respuesta para la vista
 */
exports.bicicleta_delete_post= function(req,res){
    Bicicleta.removeById(req.body.id);
    res.redirect('/bicicletas');
}
