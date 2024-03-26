import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemonDetails, fetchPokemons } from "../actions";
import { PokemonListResponse } from "../../types/pokemon-list.response";
import { Pokemon } from "../../types/pokemon-response";
interface PokemonState {
  pokemons: PokemonListResponse | [];
  selectedPokemon: Pokemon | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  pokemons: [],
  selectedPokemon: null,
  isLoading: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.pokemons = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error
          ? action.error.message!
          : "An error occurred";
      })
      .addCase(fetchPokemonDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemonDetails.fulfilled, (state, action) => {
        state.selectedPokemon = action.payload;
      })
      .addCase(fetchPokemonDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error
          ? action.error.message!
          : "An error occurred";
      });
  },
});

export const PokemonsList = (state: { pokemonsData: PokemonState }) =>
  state.pokemonsData.pokemons;
export const selectedPokemonData = (state: { pokemonsData: PokemonState }) =>
  state.pokemonsData.selectedPokemon;
export default pokemonSlice.reducer;
