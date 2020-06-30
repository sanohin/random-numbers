import { createStore, combineReducers } from "redux";
import { randomNumberReducer } from "../numbers";

const storeReducer = combineReducers({
  number1: randomNumberReducer,
  number2: randomNumberReducer,
  number3: randomNumberReducer,
});

export const store = createStore(storeReducer);

export type RootState = ReturnType<typeof storeReducer>;
