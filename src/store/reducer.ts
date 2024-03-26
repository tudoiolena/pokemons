import { combineReducers } from "@reduxjs/toolkit";
import pokemonsReducer from "./slices/pockemon.slice";

const rootReducer = combineReducers({
  pokemonsData: pokemonsReducer,
});

export default rootReducer;
