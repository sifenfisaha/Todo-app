export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type Filter = "all" | "active" | "completed";

export type TodosState = {
  todos: Todo[];
  filter: Filter;
  loading: boolean;
  error: string | null;
  quantity: number;
};
