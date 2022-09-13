const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  nombre: String,
  apellido: String,
  ci: Number,
  fechaNacimiento: Date,
  cursos: [String],
}, {
  collection: "personas_i_lima"
});

module.exports = mongoose.model("personas_i_lima", studentSchema);
