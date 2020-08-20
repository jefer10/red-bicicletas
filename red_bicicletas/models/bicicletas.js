var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var bicicletaSchema= new Schema({
    code:Number,
    color:String,
    modelo:String,
    ubicacion:{
        type:[Number],index:{type:'2dsphere',sparse: true}
    }
});

/**
 * metodo para visualizar el objeto de la base de datos
 */
bicicletaSchema.methods.toString=function () {
    return 'code:'+ this.code +"| color:" +this.color + "| ubicacion:"+ this.ubicacion;
}

/**
 * devuelve todos los objetos de la base de datos
 * @param {*} cb es toda la base de datos
 */
bicicletaSchema.statics.allBicis=function (cb){
    return this.find({},cb);
}

/**
 * crea una nueva cicla en la base de datos
 * @param {*} code el identificador unico en base de datos de la cicla
 * @param {*} color el color de la cicla
 * @param {*} modelo el modelo  de la cicla
 * @param {*} ubicacion la ubicacio de la cicla
 */
bicicletaSchema.statics.createInstance=function (code, color, modelo, ubicacion) {
    return new this({
        code: code,
        color: color, 
        modelo: modelo,
        ubicacion: ubicacion
    });
}

/**
 * adiciona un objeto a la base de datos
 * @param {*} aBici el objeto a ingresar de la base de datos
 * @param {*} cd un callback
 */
bicicletaSchema.statics.add=function(aBici,cd){
    this.create(aBici,cd)//"create" es propio de mongodb
}

/**
 * devuelve el objeto con el "code" ingresado
 * @param {*} aCode valor del code
 * @param {*} cb callback
 */
bicicletaSchema.statics.findBycode=function(aCode,cb){
    return this.findOne({code:aCode},cb);//trae el primero que encuentre dependiendo del query
}

/**
 * elimina el objeto con el valor del "code"
 * @param {*} aCode valor del code
 * @param {*} cb callback
 */
bicicletaSchema.statics.removeBycode=function(aCode,cb){
    return this.deleteOne({'code':aCode},cb);
}

//exporta el modelo "bicicletaSchema" a "mongoose"
module.exports=mongoose.model('Bicicleta',bicicletaSchema);


// var Bicicleta= function(id,color,modelo,ubicacion){
//     this.id=id;
//     this.color=color;
//     this.modelo=modelo;
//     this.ubicacion=ubicacion;
// }

// Bicicleta.prototype.toString= function(){
//     return 'id: '+ this.id +"| color:" +this.color + "| ubicacion:"+ this.ubicacion;
// }

// Bicicleta.allBicis=[];//arreglo donde se guardan las bicis

// Bicicleta.add=function(aBici){
//     Bicicleta.allBicis.push(aBici);
// }

// Bicicleta.findById=function(aBiciID){
//     let aBici =Bicicleta.allBicis.find( (x) => x.id == aBiciID);//devuelve la bici del id
//     if(aBici){
//         return aBici;
//     }else{
//         return new Error (`no existe una bicicleta con el id: ${aBici}`);
//     }
// }

// Bicicleta.removeById=function(aBiciID){
//     let aBici =Bicicleta.findById(aBiciID);
//     for (let i=0; i< Bicicleta.allBicis.length;i++)
//     {
//         if(Bicicleta.allBicis[i].id == aBiciID){
//             Bicicleta.allBicis.splice(i,1);
//             break;
//         }
//     }
// }

// Bicicleta.updateById=function(aBiciID,BiciColor,BiciModelo,BiciLat,BiciLong){
//     let aBici=Bicicleta.findById(aBiciID);
//     let verificacion = aBici instanceof Bicicleta;
//     aBici.id=aBiciID;
//     aBici.color=BiciColor;
//     aBici.modelo=BiciModelo;
//     aBici.ubicacion=[BiciLat,BiciLong];

// }


// /* var a=new Bicicleta(1,'rojo','urbana',[-36.6012424,-58.3861497])
// var b=new Bicicleta(2,'blanca','urbana',[-34.596932,-58.3808287])

// Bicicleta.add(a);
// Bicicleta.add(b); */


//module.exports=Bicicleta;
