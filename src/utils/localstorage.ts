import type { TodosState } from "../types/types";

export const saveToLocalStorage = (state: TodosState) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem("todoState", serialized);
  } catch (error) {
    console.error("could not save to localStorage", error);
  }
};

export const loadFromLocalStorage = (): TodosState | undefined => {
  try {
    const serialized = localStorage.getItem("todoState");
    if (!serialized) return undefined;
    return JSON.parse(serialized) as TodosState;
  } catch (error) {
    console.error("Could not load from localStorage", error);
    return undefined;
  }
};
