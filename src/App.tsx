import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./store/store";
import {
  PokemonsList,
  selectedPokemonData,
} from "./store/slices/pockemon.slice";
import { fetchPokemonDetails, fetchPokemons } from "./store/actions";
import { PokemonDetails } from "./components/pockemon-details";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const pokemons = useSelector(PokemonsList);
  const selectedPokemon = useSelector(selectedPokemonData);
  const [clickedPokemon, setClickedPokemon] = useState(null);

  const handlePokemonClick = (pokemonName) => {
    dispatch(fetchPokemonDetails(pokemonName));
    setClickedPokemon(pokemonName);
  };

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <div>
      <div className="pokemon-list">
        <h2>Pokemons</h2>
        <ul>
          {pokemons &&
            pokemons.map((pokemon, index) => (
              <li key={index} onClick={() => handlePokemonClick(pokemon.name)}>
                {pokemon.name}
              </li>
            ))}
        </ul>
      </div>
      {selectedPokemon && (
        <div>
          <h2>Pokemon Details</h2>
          <PokemonDetails pokemon={selectedPokemon} />
        </div>
      )}
    </div>
  );
}

export default App;
