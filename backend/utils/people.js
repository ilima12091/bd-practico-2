const getPeopleFilter = (query) => {
  const { role, ci } = query;
  const result = {};
  if (role)
    result.roles = {
      $all: [...role.split(",")],
      $size: role.split(",").length,
    };
  if (ci) result.ci = ci;
  return result;
};

module.exports = {
  getPeopleFilter,
};
