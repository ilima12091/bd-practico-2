import { createPerson } from "../services/people";

export default function usePerson() {
  const handleEditPerson = async (data) => {
    console.log(data);
    await createPerson(data);
  };

  return {
    handleEditPerson,
  };
}
