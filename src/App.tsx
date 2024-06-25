import TodoForm from "./todo/TodoForm";
import "./App.css";
import "./index.css";
import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

const App = () => {
  const state = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex gap-5 w-fit mx-auto my-7">
        <button
          onClick={() => dispatch(increment(1))}
          className="md:text-base text-sm font-semibold bg-green-400 rounded-md px-5 py-2"
        >
          Increment
        </button>
        <h1>{state}</h1>
        <button
          onClick={() => dispatch(decrement(1))}
          className="md:text-base text-sm font-semibold bg-red-400 rounded-md px-5 py-2"
        >
          Decrement
        </button>
      </div>

      <div>
        <TodoForm />
      </div>
    </>
  );
};

export default App;
