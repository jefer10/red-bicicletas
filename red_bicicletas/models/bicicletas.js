var Bicicleta= function(id,color,modelo,ubicacion){
    this.id=id;
    this.color=color;
    this.modelo=modelo;
    this.ubicacion=ubicacion;
}

Bicicleta.prototype.toString= function(){
    return 'id: '+ this.id +"| color:" +this.color + "| ubicacion:"+ this.ubicacion;
}

Bicicleta.allBicis=[];//arreglo donde se guardan las bicis

Bicicleta.add=function(aBici){
    Bicicleta.allBicis.push(aBici);
}

Bicicleta.findById=function(aBiciID){
    let aBici =Bicicleta.allBicis.find( (x) => x.id == aBiciID);//devuelve la bici del id
    if(aBici){
        return aBici;
    }else{
        return new Error (`no existe una bicicleta con el id: ${aBici}`);
    }
}

Bicicleta.removeById=function(aBiciID){
    let aBici =Bicicleta.findById(aBiciID);
    for (let i=0; i< Bicicleta.allBicis.length;i++)
    {
        if(Bicicleta.allBicis[i].id == aBiciID){
            Bicicleta.allBicis.splice(i,1);
            break;
        }
    }
}

Bicicleta.updateById=function(aBiciID,BiciColor,BiciModelo,BiciLat,BiciLong){
    let aBici=Bicicleta.findById(aBiciID);
    let verificacion = aBici instanceof Bicicleta;
    if(verificacion){
        abi
    }

}


var a=new Bicicleta(1,'rojo','urbana',[-36.6012424,-58.3861497])
var b=new Bicicleta(2,'blanca','urbana',[-34.596932,-58.3808287])

Bicicleta.add(a);
Bicicleta.add(b);


module.exports=Bicicleta;