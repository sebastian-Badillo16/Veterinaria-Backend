import {Router} from 'express';
import {check} from 'express-validator';
import FormularioControllers from '../controllers/Cita.js'


const router=Router();

router.get('/',FormularioControllers.FormularioGet);

router.post('/',[
    check('Nombre_Mascota','El Nombre de la mascota es obligatorio').not().isEmpty(),
    check('Propietario','El Nombre del Propietario es es obligatorio').not().isEmpty(),
    check('Telefono','El Telefono del propietario es  obligatorio').not().isEmpty(),
    check('Sintomas','el campo Sintomas es obligatorio').not().isEmpty(),
   
],FormularioControllers.FormularioPost);

export default router;