const mongoose = require("mongoose");

const personSchema = mongoose.Schema(
  {
    nombre: String,
    apellido: String,
    ci: Number,
    fechaNacimiento: Date,
    cursos: [String],
    cursosDicta: [String],
  },
  {
    collection: "personas_i_lima",
  }
);

module.exports = mongoose.model("Person", personSchema);
