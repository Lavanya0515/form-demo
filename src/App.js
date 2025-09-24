import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Dynamic Input Form</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleChange}
        style={{ padding: "8px", width: "250px" }}
      />
      <p>Current Value: {inputValue}</p>
    </div>
  );
}

export default App;
