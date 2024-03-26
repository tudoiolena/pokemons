import { useEffect, useState } from "react";
import { fetchPokemons } from "../utils/api-call";

import "./App.css";

interface Pokemon {
  name: string;
}

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const data = await fetchPokemons();
        console.log("The data is", data);
        setPokemons(data.results);
      } catch (err) {
        console.error("Error getting pokemons data");
      }
    };
    getPokemons();
  }, []);

  return (
    <>
      <div>
        {pokemons &&
          pokemons.map((pokemon, index) => <li key={index}>{pokemon.name}</li>)}
      </div>
    </>
  );
}

export default App;
