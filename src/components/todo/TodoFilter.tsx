import { clearCompleted } from "../../features/todos/todosSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import FilterButtons from "./FilterButtons";

const Filter: React.FC = () => {
  const quantity = useAppSelector((state) => state.todos.quantity);
  const dispatch = useAppDispatch();
  function hadnleClearCompleted() {
    dispatch(clearCompleted());
  }

  return (
    <>
      <div className="relative">
        <div className="w-full shadow-sm flex items-center justify-between bg-white text-lg dark:text-white p-4  dark:bg-dark-desaturated focus:outline-none rounded-sm">
          <span className="text-light-dark-grayish">
            {quantity} elements left
          </span>

          <button
            onClick={hadnleClearCompleted}
            className="text-light-dark-grayish cursor-pointer"
          >
            clear compleated
          </button>
        </div>
        <FilterButtons />
      </div>
    </>
  );
};

export default Filter;
