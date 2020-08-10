var Bicicleta=require('../../models/bicicletas')



/**
 * lo que se relizara antes de cada uno de los test
 */
beforeEach(()=>{//tarea que se realiza
    Bicicleta.allBicis=[];
});

/**
 * si comienza la lista de bicicletas en cero
 */
describe('Bicicleta.allBicis',()=>{
    it('comienza vacia', ()=>{//la descripcion del metodo que se verifica y despues lo que realiza la prueba
        expect(Bicicleta.allBicis.length).toBe(0)//lo que espera como resultado 
    });
});

/**
 * test del metodo de adicion de bicicletas.
 */
describe('Bicicletas.add',()=>{
    it('adiciona una bicicleta',()=>{
        expect(Bicicleta.allBicis.length).toBe(0);
        var a=new Bicicleta(1,'rojo','urbana',[-36.6012424,-58.3861497]);
        Bicicleta.add(a);
        expect(Bicicleta.allBicis.length).toBe(1);
    });

});

/**
 * test para el metodo findById
 */
describe('Bicicleta.findById',()=>{
    it('debe devolver el id 1 de la bici',()=>{
        expect(Bicicleta .allBicis.length).toBe(0);
        var bici= new Bicicleta(1,'verde',"urbana");
        var bici2=new Bicicleta(2,'azul',"ruta");
        Bicicleta.add(bici);
        Bicicleta.add(bici2);
        var biciConId=Bicicleta.findById(1);
        expect(biciConId.id).toBe(1);
        expect(biciConId.color).toBe(bici.color);
        expect(biciConId.modelo).toBe(bici.modelo);

    });
});

/**
 * test para comprobar el metodo de removeById
 */
describe('Bicicleta.removeById',()=>{
    it('elimina la bici con el id 1',()=>{
        expect(Bicicleta .allBicis.length).toBe(0);
        var bici= new Bicicleta(1,'verde',"urbana");
        var bici2=new Bicicleta(2,'azul',"ruta");
        Bicicleta.add(bici);
        Bicicleta.add(bici2);
        Bicicleta.removeById(1);
        var biciConId=Bicicleta.findById(1);
        expect(biciConId).toBeUndefined;//no esta definido
    });
});