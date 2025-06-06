import { createSlice } from "@reduxjs/toolkit";
import type { TodosState, Todo, Filter } from "../../types/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState: TodosState = {
  todos: [],
  filter: "all",
  loading: false,
  error: null,
  quantity: 0,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload);
        state.quantity += 1;
      },
      prepare: (text: string) => {
        return {
          payload: { id: nanoid(), text, completed: false } as Todo,
        };
      },
    },
    toggleTodo: (state, action: PayloadAction<String>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        todo.completed ? (state.quantity -= 1) : (state.quantity += 1);
      }
    },
    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) todo.text = action.payload.text;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos.filter((todo) => todo.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    loadTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  editTodo,
  deleteTodo,
  setFilter,
  setLoading,
  setError,
  loadTodos,
} = todosSlice.actions;

export default todosSlice.reducer;
