import { combineReducers } from "@reduxjs/toolkit";
import pokemonsReducer from "./slices/pokemon.slice";

const rootReducer = combineReducers({
  pokemonsData: pokemonsReducer,
});

export default rootReducer;
