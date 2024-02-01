import "./App.css";
import { useState } from "react";

function App() {
  const [val, setVal] = useState("");
  const [word, setWord] = useState(0);

  const handleChange = (e) => {
    const data = e.target.value.split(" ");
    if (data.length <= 5) {
      setWord(data.length);
      setVal(e.target.value);
    } else {
      alert("Word limit exceeded 5");
    }
  };

  return (
    <div className="App">
      <h3>Enter words</h3>
      <p>No of words {word}</p>
      <p>No of letters {val.length}</p>
      <input value={val} onChange={handleChange}></input>
    </div>
  );
}

export default App;
