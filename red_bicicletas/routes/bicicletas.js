var express =require('express');
var router=express.Router();
var bicicletaController=require('../controllers/bicicleta.js');

router.get('/',bicicletaController.bicicleta_list);
//actualizar
router.get('/create',bicicletaController.bicicleta_create_get);//pagina del formulario
router.post('/create',bicicletaController.bicicleta_create_post);
//update
router.get('/:id/update',bicicletaController.bicicleta_update_get);//el ":id" es el id que se quiere actualizar
router.post('/:id/update',bicicletaController.bicicleta_update_post);//el ":id" es el id que se quiere eliminar
//delete
router.post('/:id/delete',bicicletaController.bicicleta_delete_post);//el ":id" es el id que se quiere eliminar


module.exports=router;