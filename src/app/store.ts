import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../utils/localstorage";
import { initialState } from "../features/todos/todosSlice";

const preloadedState = {
  todos: loadFromLocalStorage() || initialState,
};

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveToLocalStorage(store.getState().todos);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
