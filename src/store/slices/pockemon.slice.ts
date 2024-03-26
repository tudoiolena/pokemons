import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemonDetails, fetchPokemons } from "../actions";

interface PokemonListItem {
  name: string;
  url: string;
}

interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

interface PokemonState {
  pokemons: PokemonListResponse | [];
  selectedPokemon: any | null;
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
