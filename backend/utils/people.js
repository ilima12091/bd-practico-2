const getPersonRoles = (person) => {
  const result = [];
  if (person.cursos?.length > 0) result.push("estudiante");
  if (person.cursosDicta?.length > 0) result.push("profesor");
  return result;
};

const getPeopleFilter = (query) => {
  const { role, ci } = query;
  const result = {};
  if (Array.isArray(role)) {
    result.cursos = { $exists: true };
    result.cursosDicta = { $exists: true };
  }
  if (role === "estudiante") result.cursos = { $exists: true };
  if (role === "profesor") result.cursosDicta = { $exists: true };
  if (ci) result.ci = ci;
  return result;
};

module.exports = {
  getPersonRoles,
  getPeopleFilter,
};
