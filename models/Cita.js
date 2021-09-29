import mongoose from "mongoose";

const FormularioSchema = mongoose.Schema({
    Nombre_Mascota: { type: String, required: true, maxlenght: 30 },
    Propietario: { type: String, required: true, maxlenght: 30 },
    Telefono: { type: String, required: true, maxlenght: 15 },
    Sintomas: { type: String, required: true, maxlenght: 200 },
    //Hora: { type:, required:true},
    Hora:{type: String, required: true},
    Fecha: { type: Date, required: true},
    createAt: { type: Date, default: Date.now }

})

export default mongoose.model('formulario', FormularioSchema); 