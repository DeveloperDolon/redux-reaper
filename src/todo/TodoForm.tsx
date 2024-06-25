import React, { useState } from "react";
import TodoInput from "../component/TodoInput/TodoInput";

const TodoForm = () => {
  const [todoVal, setTodoVal] = useState("");
  // const { todoTitle } = useContext(TodoContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(todoVal);
  };

  return (
    <div className="max-w-5 mx-auto flex justify-center">
      <form onSubmit={handleSubmit} className="space-y-7 md:mt-14 mt-20">
        <h1 className="md:text-3xl text-2xl font-bold text-center">Todo App</h1>
        <TodoInput type="text" setValue={setTodoVal} />

        <div className="flex justify-center">
          <button className="md:text-base text-sm font-semibold bg-yellow-400 rounded-md px-5 py-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
