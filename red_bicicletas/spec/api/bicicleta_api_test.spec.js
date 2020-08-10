var Bicicleta=require('../../models/bicicletas');
var request=require('request');
var server=require('../../bin/www');

describe('Bicicleta API',()=>{
    //test del get
    describe('peticion get /',()=>{
        it('status 200',()=>{
            expect(Bicicleta.allBicis.length).toBe(0);
            
            var a = new Bicicleta(1,'verde',"urbana");
            Bicicleta.add(a);
            //donde se hace la peticion get
            request.get('http://localhost:3000/api/bicicletas',(error, response, body)=>{
                expect(response.statusCode).toBe(200);
            });
        });
    });

    //test del /create
    describe('peticion post bicicletas /create',()=>{
        it('status 200',(done)=>{//"done" es uncalback que se usa para asegurar que espere hasta que se realize la peticion asincrona
            var headers={'content-type':'application/json'};
            var abici='{"id":10, "color":"rojo", "modelo":"urbana", "latitud": "-31", "longitud":-54}';
            request.post({
                headers:headers,
                url:'http://localhost:3000/api/bicicletas/create',
                body:abici
            },function (error, response, body) {
                expect(response.statusCode).toBe(200);
                expect(Bicicleta.findById(10).color).toBe("rojo");
                done();
            });
        });
    });

    //test del update
    describe('peticion post bicicletas /update',()=>{
        it('status 200',(done)=>{//"done" es uncalback que se usa para asegurar que espere hasta que se realize la peticion asincrona
            var headers={'content-type':'application/json'};
            var abici='{"id":1, "color":"azul", "modelo":"urbana", "latitud": "-31", "longitud":"-54"}';
            request.post({
                headers:headers,
                url:'http://localhost:3000/api/bicicletas/update/',
                body:abici
            },function (error, response, body) {
                var b=Bicicleta.findById(1);
                expect(response.statusCode).toBe(200);
                expect(Bicicleta.findById(1).color).toBe("azul");
                expect(Bicicleta.findById(1).ubicacion[0]).toBe("-31");
                done();
            });
        });
    });

    //test de la peticion delete
    describe('peticion delete bicicletas /delete',()=>{
        it('status 204',(done)=>{//"done" es uncalback que se usa para asegurar que espere hasta que se realize la peticion asincrona
            var headers={'content-type':'application/json'};
            var abici='{"id":10}';
            request.delete({
                headers:headers,
                url:'http://localhost:3000/api/bicicletas/delete',
                body:abici
            },function (error, response, body) {
                var b=Bicicleta.findById(10);
                expect(response.statusCode).toBe(204);
                expect(Bicicleta.findById(10)).toBeUndefined;
                done();
            });
        });
    });
});