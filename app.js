--quiz--
import { useState } from "react";
import "./App.css";

export default function App() {
  const questions = [
    { q: "What is 2 + 2?", a: "4" },
    { q: "Capital of India?", a: "New Delhi" },
    { q: "React is a ___?", a: "Library" },
  ];

  const [index, setIndex] = useState(0);
  const [ans, setAns] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const checkAnswer = () => {
    if (ans.trim().toLowerCase() === questions[index].a.toLowerCase()) {
      setScore(score + 1);
    }
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setAns("");
    } else setFinished(true);
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h2>🧠 Quiz App</h2>
      {finished ? (
        <h3>Your Score: {score}/{questions.length}</h3>
      ) : (
        <>
          <h3>{questions[index].q}</h3>
          <input value={ans} onChange={(e) => setAns(e.target.value)} placeholder="Your answer" />
          <button onClick={checkAnswer}>Submit</button>
        </>
      )}
    </div>
  );
}

import { useState } from "react";
import "./App.css";

export default function App() {
  const questions = [
    { q: "What is 2 + 2?", a: "4" },
    { q: "Capital of India?", a: "New Delhi" },
    { q: "React is a ___?", a: "Library" },
  ];

  const [index, setIndex] = useState(0);
  const [ans, setAns] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const checkAnswer = () => {
    if (ans.trim().toLowerCase() === questions[index].a.toLowerCase()) {
      setScore(score + 1);
    }
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setAns("");
    } else setFinished(true);
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h2>🧠 Quiz App</h2>
      {finished ? (
        <h3>Your Score: {score}/{questions.length}</h3>
      ) : (
        <>
          <h3>{questions[index].q}</h3>
          <input value={ans} onChange={(e) => setAns(e.target.value)} placeholder="Your answer" />
          <button onClick={checkAnswer}>Submit</button>
        </>
      )}
    </div>
  );
}

--temp--
import { useState } from "react";
import "./App.css";

export default function App() {
  const [temp, setTemp] = useState("");
  const [unit, setUnit] = useState("C");
  const [converted, setConverted] = useState("");

  const convert = () => {
    const t = parseFloat(temp);
    if (isNaN(t)) return setConverted("Enter valid temperature");
    if (unit === "C") setConverted(((t * 9) / 5 + 32).toFixed(2) + " °F");
    else setConverted((((t - 32) * 5) / 9).toFixed(2) + " °C");
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h2>🌡️ Temperature Converter</h2>
      <input value={temp} onChange={(e) => setTemp(e.target.value)} placeholder="Enter temperature" />
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
      </select>
      <button onClick={convert}>Convert</button>
      <h3>Converted: {converted}</h3>
    </div>
  );
}

--counter--
import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h2>🔢 Counter App</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

--age cal--
import { useState } from "react";
import "./App.css";

export default function App() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dob) return;
    const birthDate = new Date(dob);
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) years--;
    setAge(years);
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h2>🎂 Age Calculator</h2>
      <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      <button onClick={calculateAge}>Calculate</button>
      {age !== null && <h3>Your Age: {age} years</h3>}
    </div>
  );
}
--shoppigbill--
import { useState } from "react";
import "./App.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addItem = () => {
    if (name && price) {
      setItems([...items, { name, price: parseFloat(price) }]);
      setName("");
      setPrice("");
    }
  };

  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h2>🛒 Shopping Bill</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Item name" />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Item price" />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((i, index) => (
          <li key={index}>{i.name}: ₹{i.price}</li>
        ))}
      </ul>
      <h3>Total Bill: ₹{total}</h3>
    </div>
  );
}

--disc cal--
import { useState } from "react";
import "./App.css";

export default function App() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [final, setFinal] = useState(null);

  const calculateDiscount = () => {
    const p = parseFloat(price);
    const d = parseFloat(discount);
    if (isNaN(p) || isNaN(d)) return setFinal("Enter valid numbers");
    const discountedPrice = p - (p * d) / 100;
    setFinal(discountedPrice.toFixed(2));
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h2>💰 Discount Calculator</h2>
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Original Price" />
      <input value={discount} onChange={(e) => setDiscount(e.target.value)} placeholder="Discount %" />
      <button onClick={calculateDiscount}>Calculate</button>
      {final && <h3>Final Price: ₹{final}</h3>}
    </div>
  );
        }
