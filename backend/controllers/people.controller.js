const studentSchema = require("./../models/student");

module.exports = {
  getPeople: async (req, res) => {
    const response = await studentSchema.find({ cursos: { $exists: true } });
    console.log(response);
    res.json(response);
  },
};
