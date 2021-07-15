import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [max, setMax] = useState(10);
  const [min, setMin] = useState(-10);

  const maxDisabled =  (() => count >= max, [count, max]);
  const minDisabled = useMemo(() => count <= min, [count, min]);
  return (
    <div className="App">
      <div className="range">
        <label htmlFor="asd">
          min
          <input
            disabled={minDisabled}
            onChange={(ev) => setMin(ev.target.value)}
            value={min}
            type="number"
          />
        </label>
        <label htmlFor="asd">
          max
          <input
            disabled={maxDisabled}
            value={max}
            onChange={(ev) => setMax(ev.target.value)}
            type="number"
          />
        </label>
      </div>
      <h1>{count}</h1>
      <div>
        <button disabled={maxDisabled} onClick={() => setCount((c) => c + 1)}>
          increase
        </button>
        <button onClick={() => setCount(0)}>reseat</button>
        <button disabled={minDisabled} onClick={() => setCount((c) => c - 1)}>
          decrease
        </button>
      </div>
    </div>
  );
}

export default App;
