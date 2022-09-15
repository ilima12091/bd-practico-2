const { getPeopleFilter, getPersonRolesAttribs } = require("../utils/people");
const personSchema = require("./../models/person");

module.exports = {
  getPeople: async (req, res) => {
    const queryResponse = await personSchema.find(getPeopleFilter(req.query));
    const response = queryResponse.map((el) => {
      const { nombre, ci, roles } = el;
      return {
        name: nombre,
        ci,
        roles,
      };
    });
    res.json(response);
  },
  editPerson: async (req, res) => {
    try {
      const { ci, name, roles } = req.body;
      if (!ci) throw new Error("Debe enviar una ci válida");
      if (!name) throw new Error("Debe enviar un nombre válido");
      if (!roles) throw new Error("Debe enviar roles válidos");

      let person = await personSchema.findOne({ ci: ci });
      person.nombre = name;
      person.roles = roles;
      await person.save();
      res.status(200).json({ message: "ok" });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  deletePerson: async (req, res) => {
    try {
      const ci = req.params.ci;
      await personSchema.findOneAndDelete({ ci });
      res.status(200).json({ message: "ok" });
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
