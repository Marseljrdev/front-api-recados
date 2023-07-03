import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./modules/user.slice";
import recadosReducer from "./modules/recados.slice";

export const combinedReducers = combineReducers({
  recados: recadosReducer,
  user: userReducer,
});
