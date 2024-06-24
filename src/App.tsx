import TodoProvider from "./context/TodoContext";
import TodoForm from "./todo/TodoForm";
import "./App.css";
import "./index.css";

const App = () => {
  return (
    <TodoProvider>
      <div>
        <TodoForm />
      </div>
    </TodoProvider>
  );
};

export default App;
