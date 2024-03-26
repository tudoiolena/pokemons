import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./store/store";
import {
  PokemonsList,
  selectedPokemonData,
} from "./store/slices/pokemon.slice";
import { fetchPokemonDetails, fetchPokemons } from "./store/actions";
import { PokemonDetails } from "./components/pokemon-details";
import { Pokemon } from "./types/pokemon-response";
import { capitalizeFirstLetter } from "./helpers/capitalize-first-letter";

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
    <div className="pokemon__container">
      <div className="pokemon__list-container">
        <h2>Pokemons</h2>
        <ul className="pokemon__list">
          {Array.isArray(pokemons) &&
            pokemons.map((pokemon: Pokemon, index: number) => (
              <li
                className="pokemon__list-item"
                key={index}
                onClick={() => handlePokemonClick(pokemon.name)}
              >
                {capitalizeFirstLetter(pokemon.name)}
              </li>
            ))}
        </ul>
      </div>
      {selectedPokemon && (
        <div className="polemon__details">
          <PokemonDetails pokemon={selectedPokemon} />
        </div>
      )}
    </div>
  );
}

export default App;
