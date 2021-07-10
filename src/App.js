import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Starfish Island</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
