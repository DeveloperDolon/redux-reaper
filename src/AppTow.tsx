import { useReducer } from "react";
import "./App.css";
import "./index.css";

const initialState = {
  name: "",
  age: "",
  email: "",
};

const reducer = (
  currentState: { name: string; age: string; email: string },
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };

    case "addAge":
      return { ...currentState, age: action.payload };

    case "addEmail":
      return { ...currentState, email: action.payload };

    default:
      return currentState;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="App p-24">
      <form className="p-20 bg-slate-100 flex gap-10">
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          className="md:text-base text-sm p-2"
          placeholder="Input Name"
          type="text"
          name="name"
          id="name"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addAge", payload: e.target.value })
          }
          className="md:text-base text-sm p-2"
          placeholder="Input Age"
          type="number"
          name="age"
          id="age"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addEmail", payload: e.target.value })
          }
          className="md:text-base text-sm p-2"
          placeholder="Input Email"
          type="email"
          name="email"
          id="email"
        />

        <button
          type="submit"
          className="bg-amber-400 px-3 py-2 rounded-lg font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
