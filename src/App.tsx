import "./App.css";
import "./index.css";
function App() {
  return (
    <div className="App p-24">
      <form className="p-20 bg-slate-100 flex gap-10">
        <input
          className="md:text-base text-sm p-2"
          placeholder="Input Name"
          type="text"
          name="name"
          id="name"
        />
        <input
          className="md:text-base text-sm p-2"
          placeholder="Input Age"
          type="number"
          name="age"
          id="age"
        />
        <input
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
