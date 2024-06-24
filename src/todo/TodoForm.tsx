import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const { todoTitle } = useContext(TodoContext);

  return <div>{todoTitle}</div>;
};

export default TodoForm;
