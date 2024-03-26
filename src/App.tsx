import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./store/store";
import {
  PokemonsList,
  selectedPokemonData,
} from "./store/slices/pockemon.slice";
import { fetchPokemonDetails, fetchPokemons } from "./store/actions";
import { PokemonDetails } from "./components/pockemon-details";
import { Pokemon } from "./types/pockemon-response";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const pokemons = useSelector(PokemonsList);
  const selectedPokemon = useSelector(selectedPokemonData);

  const handlePokemonClick = (pokemonName: string) => {
    dispatch(fetchPokemonDetails(pokemonName));
  };

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <div>
      <div className="pokemon-list">
        <h2>Pokemons</h2>
        <ul>
          {Array.isArray(pokemons) &&
            pokemons.map((pokemon: Pokemon, index: number) => (
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
