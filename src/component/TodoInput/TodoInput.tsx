interface InputPropsType {
  type: string;
  setValue: (value: string) => void;
}

const TodoInput = ({ type, setValue }: InputPropsType) => {
  return (
    <>
      <input
        className="bg-slate-200 px-4 py-3 rounded-md"
        type={type}
        onBlur={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default TodoInput;
