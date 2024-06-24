import { ReactNode, createContext } from "react";

type TodoProviderProps = {
  children: ReactNode;
};

type TodoInitialType = {
  todoTitle: string;
};

const initialData: TodoInitialType = {
  todoTitle: "",
};

export const TodoContext = createContext(initialData);

const TodoProvider = ({ children }: TodoProviderProps) => {
  const values = {
    todoTitle: "This is a todo title.",
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
