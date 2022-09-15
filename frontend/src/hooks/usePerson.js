import { createPerson } from "../services/people";
import { deletePerson } from "./../services/people";

export default function usePerson() {
  const handleEditPerson = async (data) => {
    await createPerson(data);
  };

  const handleDeletePerson = async (ci) => {
    await deletePerson(ci);
  };

  return {
    handleEditPerson,
    handleDeletePerson,
  };
}
