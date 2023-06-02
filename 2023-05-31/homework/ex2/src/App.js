import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const trimmedText = text.trim();
      const words = trimmedText ? trimmedText.split(/\s+/) : [];
      setWordCount(words.length);
    }, 500);

    return () => clearTimeout(timer);
  }, [text]);

  const handleChange = (event) => {
    clearTimeout(timer);
    const textInput = event.target.value;
    setText(textInput);
  };

  let timer = null;

  return (
    <div className="App">
      <textarea className="textarea" value={text} onChange={handleChange} />
      <p>Word count: {wordCount}</p>
    </div>
  );
}

export default App;
