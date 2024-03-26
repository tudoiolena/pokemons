import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../../utils/api-call";

export const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons",
  async () => {
    const data = await apiCall("pokemon?limit=30");
    return data.results;
  }
);

export const fetchPokemonDetails = createAsyncThunk(
  "pokemon/fetchPokemonDetails",
  async (pokemonName: string) => {
    const data = await apiCall(`pokemon/${pokemonName}`);
    return data;
  }
);
