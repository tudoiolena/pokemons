import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./store/store";
import { PokemonsList } from "./store/slices/pockemon.slice";
import { fetchPokemons } from "./store/actions";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const pokemons = useSelector(PokemonsList);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

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
