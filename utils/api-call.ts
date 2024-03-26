export const apiCall = async (url: string) => {
  const baseUrl = "https://pokeapi.co/api/v2";

  try {
    const response = await fetch(`${baseUrl}/${url}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching pokemon api: ", err);
  }
};
