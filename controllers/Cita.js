import Formulario from '../models/Cita.js'

 const FormularioControllers = {
    FormularioGet: async (req, res) => {
        const value = req.query.value;
        const formulario = await Formulario
            .find({
                $or: [
                    { Nombre_Mascota: new RegExp(value, 'i') },
                    { Propietario: new RegExp(value, 'i') },
                    { Telefono: new RegExp(value, 'i') },
                    { Sintomas: new RegExp(value, 'i') },
                    //{ Hora: new RegExp(value, 'i')},
                    //{ Fecha: new RegExp(value, 'i')}

                ]
            })
            .sort({ 'Nombre_Mascota': -1 })

        res.json({
            formulario
        })
    },

    FormularioPost: async (req, res) => {
        const { Nombre_Mascota, Propietario, Telefono, Sintomas,Hora,Fecha } = req.body;
        const formulario = new Formulario({ Nombre_Mascota, Propietario, Telefono, Sintomas,Hora,Fecha })

        await formulario.save();

        res.json({
            formulario
        })
    }
}

export default  FormularioControllers;