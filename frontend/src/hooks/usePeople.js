import { useEffect, useState } from "react";
import { getPeople } from "../services/people";

export default function usePeople(filters, reload, setReload) {
  const [people, setPeople] = useState({
    isLoading: false,
    error: false,
    data: [],
  });

  useEffect(() => {
    const { isLoading, error } = people;

    const loadPeople = async () => {
      setPeople({
        isLoading: true,
        error: false,
        data: [],
      });
      try {
        const response = await getPeople(filters);
        setPeople({
          isLoading: false,
          error: false,
          data: response,
        });
      } catch (error) {
        setPeople({
          isLoading: false,
          error: true,
          data: [],
        });
      }
      setReload(false);
    };
    if (!isLoading && !error && reload) loadPeople();
  }, [reload]);

  return {
    people,
  };
}
