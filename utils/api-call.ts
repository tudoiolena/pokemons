const baseURL = "/api/";

const apiCall = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching pokemon api: ", err);
  }
};

export const fetchPokemons = async () => {
  const url = `${baseURL}/pokemon?limit=10`;
  return apiCall(url);
};
