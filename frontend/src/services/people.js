import { apiDelete, apiGet, apiPut } from "./api";

export const getPeople = async (filters) => {
  let queryString = "";
  Object.entries(filters).forEach((el) => {
    queryString += `${el[0]}=${el[1]}&`;
  });
  return await apiGet(`http://localhost:3001/people?${queryString}`);
};

export const createPerson = async (data) => {
  return await apiPut("http://localhost:3001/people", {}, data);
};

export const deletePerson = async (ci) => {
  return await apiDelete(`http://localhost:3001/people/${ci}`, {}, {});
};
