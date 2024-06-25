import React, { ReactNode, createContext } from "react";

type TodoProviderProps = {
  children: ReactNode;
};

type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type TAction = {
  type: string;
  payload: TTodo;
};

export type TContext = {
  todoTitle: string;
  state: TTodo[];
  dispatch: React.Dispatch<TAction>;
};

export const TodoContext = createContext<TContext | undefined>(undefined);

const TodoProvider = ({ children }: TodoProviderProps) => {
  const values: TContext = {
    todoTitle: "This is a todo title.",
    state: [],
    dispatch: function (value: TAction): void {
      throw new Error("Function not implemented.");
    },
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
