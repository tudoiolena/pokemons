import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemonDetails, fetchPokemons } from "../actions";
import { PokemonListResponse } from "../../types/pokemon-list.response";
import { Pokemon } from "../../types/pokemon-response";
interface PokemonState {
  pokemons: PokemonListResponse | [];
  selectedPokemon: Pokemon | null;
}

const initialState: PokemonState = {
  pokemons: [],
  selectedPokemon: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.pokemons = action.payload;
      })
      .addCase(fetchPokemonDetails.fulfilled, (state, action) => {
        state.selectedPokemon = action.payload;
      });
  },
});

export const PokemonsList = (state: { pokemonsData: PokemonState }) =>
  state.pokemonsData.pokemons;
export const selectedPokemonData = (state: { pokemonsData: PokemonState }) =>
  state.pokemonsData.selectedPokemon;
export default pokemonSlice.reducer;
