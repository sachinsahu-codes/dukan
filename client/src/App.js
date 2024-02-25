import { useState, useEffect } from "react";

const App = () => {
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080")
      .then((response) => response.text())
      .then((data) => setBackendMessage(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="App">
      <h1>{backendMessage}</h1>
    </div>
  );
};

export default App;
