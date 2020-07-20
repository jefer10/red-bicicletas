var Bicicleta= require('../models/bicicletas');

/**
 * metodo para renderizar la lista de las bicis
 * respondiendo con el index.pug de la carpeta bicicletas en views
 * pasandole un objeto llamado bicis
 */
exports.bicicleta_list=function(req,res){
    res.render('bicicletas/index',{bicis: Bicicleta.allBicis});
}