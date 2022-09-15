const { getPersonRoles, getPeopleFilter } = require("../utils/people");
const personSchema = require("./../models/person");

module.exports = {
  getPeople: async (req, res) => {
    const queryResponse = await personSchema.find(getPeopleFilter(req.query));
    const response = queryResponse.map((el) => {
      const { nombre, ci } = el;
      return {
        name: nombre,
        ci,
        roles: getPersonRoles(el),
      };
    });
    res.json(response);
  },
  editPerson: async (req, res) => {},
};
