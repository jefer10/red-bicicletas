var Bicicleta=require('../../models/bicicletas');

var mongoose=require('mongoose');
const bicicletas = require('../../models/bicicletas');


/**
 * prueba la coneccion de la base de datos
 */
describe('testing bicicletas',function(){
    beforeEach(function(done){
        var mongoDB='mongodb://localhost/testdb';
        mongoose.connect(mongoDB,{useNewUrlParser: true });

        const db =mongoose.connection;
        db.on('error',console.error.bind(console,'connection error'));
        db.once('open',function(){
            console.log('!connected to test database!!');
            done();
        });
    });

    afterEach(function(done){
        //bora todo lo de la base de datos
        const db=mongoose.connection;
        Bicicleta.deleteMany({},function (err,success){
            if (err){
                console.log(err);
            }
            db.close();
            done();
        });
    });



    describe('Bicileta.createInstance',function (){
        it('crea una instancia de bicicleta',()=>{
            
            var bici=Bicicleta.createInstance(1,'verde','urbana',[-34.5,-54.1]);
            expect(bici.code).toBe(1);
            expect(bici.color).toBe('verde');
            expect(bici.modelo).toBe("urbana");
            expect(bici.ubicacion[0]).toEqual(-34.5);
            expect(bici.ubicacion[1]).toEqual(-54.1);
        });
    });
    


    describe('Bicicleta.allBicis',()=>{
        it('comienza vacia la base de datos',(done)=>{
            Bicicleta.allBicis(function (err, bicis) {
                expect(bicis.length).toBe(0);
                done();
            });
        });
    });


    describe('bicicleta.add',()=>{
        it('agrega una bicicleta',(done)=>{
            var aBici=new Bicicleta({code:1,color:'verde',modelo:'ruta'});
            Bicicleta.add(aBici,function(err,newBici){
                if(err){
                    console.log(err);
                }
                Bicicleta.allBicis(function(err,bicis){
                    expect(bicis.length).toEqual(1);
                    expect(bicis[0].code).toEqual(aBici.code);
                    expect(bicis[0].modelo).toEqual(aBici.modelo);
                    //console.log(bicis);
                    done();
                });
            });
        });
    });




    describe('bicicleta.add',()=>{
        it('busca la bici con el code 1',(done)=>{
            var aBici=new Bicicleta({code:1,color:'verde',modelo:'ruta'});
            var aBici2=new Bicicleta({code:2,color:'azul',modelo:'bmx'});
            Bicicleta.add(aBici,function(err,newBici){
                if(err){
                    console.log(err);
                }
                Bicicleta.add(aBici2,function(err,newBici){
                    if(err){
                        console.log(err);
                    }
                    Bicicleta.allBicis(function(err,bicis){
                        expect(bicis.length).toEqual(2);
                        expect(bicis[0].code).toEqual(aBici.code);
                        expect(bicis[0].modelo).toEqual(aBici.modelo);
                        //console.log(bicis);
                        Bicicleta.findBycode(1,function(err,targetBici){
                                //console.log(targetBici);
                                expect(targetBici.code).toBe(aBici.code);
                                expect(targetBici.color).toBe(aBici.color);
                                expect(targetBici.modelo).toBe(aBici.modelo);
                                done();
                        });
                    });
                });
            });
        });
    });



    describe('test del deleteBycode bici',()=>{
    it('elimina la bici con code:2',(done)=>{
        bicicletas.allBicis((err,bicis)=>{
            expect(bicis.length).toBe(0);
            var aBici=new Bicicleta({code:1,color:'verde',modelo:'ruta'});
            var aBici2=new Bicicleta({code:2,color:'azul',modelo:'bmx'});
            bicicletas.add(aBici,(err,newbici)=>{
                if(err){
                    console.log(err);
                }
                bicicletas.add(aBici2,(err,newbici)=>{
                    bicicletas.allBicis((err,bicis)=>{
                        expect(bicis.length).toBe(2);
                        bicicletas.removeBycode(2,(err)=>{
                            if(err){
                                console.log(err);
                            }
                            bicicletas.findBycode(2,(err,bicis)=>{
                                if(err){
                                    console.log(err);
                                }
                                expect(bicis).toBeUndefined;
                                done();
                            });
                        });
                    });
                });
            });
        });
    });
    });


    




});










/**
 * lo que se relizara antes de cada uno de los test
 */
// beforeEach(()=>{//tarea que se realiza
//     Bicicleta.allBicis=[];
// });

/**
 * si comienza la lista de bicicletas en cero
 */
// describe('Bicicleta.allBicis',()=>{
//     it('comienza vacia', ()=>{//la descripcion del metodo que se verifica y despues lo que realiza la prueba
//         expect(Bicicleta.allBicis.length).toBe(0)//lo que espera como resultado 
//     });
// });

/**
 * test del metodo de adicion de bicicletas.
 */
// describe('Bicicletas.add',()=>{
//     it('adiciona una bicicleta',()=>{
//         expect(Bicicleta.allBicis.length).toBe(0);
//         var a=new Bicicleta(1,'rojo','urbana',[-36.6012424,-58.3861497]);
//         Bicicleta.add(a);
//         expect(Bicicleta.allBicis.length).toBe(1);
//     });

// });

/**
 * test para el metodo findById
 */
// describe('Bicicleta.findById',()=>{
//     it('debe devolver el id 1 de la bici',()=>{
//         expect(Bicicleta .allBicis.length).toBe(0);
//         var bici= new Bicicleta(1,'verde',"urbana");
//         var bici2=new Bicicleta(2,'azul',"ruta");
//         Bicicleta.add(bici);
//         Bicicleta.add(bici2);
//         var biciConId=Bicicleta.findById(1);
//         expect(biciConId.id).toBe(1);
//         expect(biciConId.color).toBe(bici.color);
//         expect(biciConId.modelo).toBe(bici.modelo);

//     });
// });

/**
 * test para comprobar el metodo de removeById
 */
// describe('Bicicleta.removeById',()=>{
//     it('elimina la bici con el id 1',()=>{
//         expect(Bicicleta .allBicis.length).toBe(0);
//         var bici= new Bicicleta(1,'verde',"urbana");
//         var bici2=new Bicicleta(2,'azul',"ruta");
//         Bicicleta.add(bici);
//         Bicicleta.add(bici2);
//         Bicicleta.removeById(1);
//         var biciConId=Bicicleta.findById(1);
//         expect(biciConId).toBeUndefined;//no esta definido
//     });
// });
