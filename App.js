---form---
  import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password is too short";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully!");
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      {errors.name && <p>{errors.name}</p>}<br></br>

      <input name="email" placeholder="Email" onChange={handleChange} />
      {errors.email && <p>{errors.email}</p>}<br></br>

      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      {errors.password && <p>{errors.password}</p>}<br></br>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password is too short";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully!");
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      {errors.name && <p>{errors.name}</p>}<br></br>

      <input name="email" placeholder="Email" onChange={handleChange} />
      {errors.email && <p>{errors.email}</p>}<br></br>

      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      {errors.password && <p>{errors.password}</p>}<br></br>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;





---bmi---
  import React, { useState } from "react";

function BMICalculator() {
  const [weight, setWeight] = useState(""); // for weight input
  const [height, setHeight] = useState(""); // for height input
  const [bmi, setBmi] = useState(null); // to store calculated BMI
  const [message, setMessage] = useState(""); // to store category (underweight, normal, etc.)

  const calculateBMI = () => {
    if (weight === "" || height === "") {
      alert("Please enter both weight and height!");
      return;
    }

    const heightInMeters = height / 100; // convert cm to meters
    const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(calculatedBMI);

    if (calculatedBMI < 18.5) {
      setMessage("Underweight");
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
      setMessage("Normal weight");
    } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
      setMessage("Overweight");
    } else {
      setMessage("Obese");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>BMI Calculator</h1>

      <input
        type="number"
        placeholder="Enter weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      /><br /><br />

      <input
        type="number"
        placeholder="Enter height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      /><br /><br />

      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <div style={{ marginTop: "20px" }}>
          <h3>Your BMI: {bmi}</h3>
          <p>Status: {message}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;


---ddictionary--
import React, { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Function to search word meaning
  const searchWord = () => {
    if (!word.trim()) {
      setError("Please enter a word");
      setResult(null);
      return;
    }

    setError(null);
    setResult(null);

    // Fetch data from Dictionary API
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        if (!res.ok) throw new Error("Word not found");
        return res.json();
      })
      .then((data) => {
        setResult(data[0]);
      })
      .catch(() => {
        setError("No definition found.");
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📘 React Dictionary App</h1>

      <input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        style={{ padding: "10px", width: "250px", fontSize: "16px" }}
      />
      <button
        onClick={searchWord}
        style={{
          padding: "10px 15px",
          marginLeft: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

      {result && (
        <div style={{ marginTop: "30px" }}>
          <h2>{result.word}</h2>
          {result.phonetics && result.phonetics[0]?.text && (
            <p>
              <strong>Pronunciation:</strong> {result.phonetics[0].text}
            </p>
          )}
          {result.meanings && result.meanings[0] && (
            <div>
              <h3>Meaning:</h3>
              <p>{result.meanings[0].definitions[0].definition}</p>
            </div>
          )}
          {result.meanings && result.meanings[0]?.partOfSpeech && (
            <p>
              <strong>Part of Speech:</strong>{" "}
              {result.meanings[0].partOfSpeech}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;


--todo--
import React, { useState } from "react";

function ToDoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (task.trim() === "") return;
    if (editIndex !== null) {
      const updated = [...tasks];
      updated[editIndex] = task;
      setTasks(updated);
      setEditIndex(null);
    } else {
      setTasks([...tasks, task]);
    }
    setTask("");
  };

  const handleEdit = (i) => {
    setTask(tasks[i]);
    setEditIndex(i);
  };

  const handleDelete = (i) => {
    setTasks(tasks.filter((_, index) => index !== i));
  };

  return (
    <>
      <h1>To-Do List</h1>
      <input
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>{editIndex !== null ? "Update" : "Add"}</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t}{" "}
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoApp;import React, { useState } from "react";

function ToDoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (task.trim() === "") return;
    if (editIndex !== null) {
      const updated = [...tasks];
      updated[editIndex] = task;
      setTasks(updated);
      setEditIndex(null);
    } else {
      setTasks([...tasks, task]);
    }
    setTask("");
  };

  const handleEdit = (i) => {
    setTask(tasks[i]);
    setEditIndex(i);
  };

  const handleDelete = (i) => {
    setTasks(tasks.filter((_, index) => index !== i));
  };

  return (
    <>
      <h1>To-Do List</h1>
      <input
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>{editIndex !== null ? "Update" : "Add"}</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t}{" "}
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoApp;


--rupee conv--
import React, { useState } from "react";

function App() {
  const [usd, setUsd] = useState("");
  const [eur, setEur] = useState("");
  const [inrFromUsd, setInrFromUsd] = useState("");
  const [inrFromEur, setInrFromEur] = useState("");

  const convertUsdToInr = () => {
    setInrFromUsd((usd * 83).toFixed(2)); // 1 USD = 83 INR
  };

  const convertEurToInr = () => {
    setInrFromEur((eur * 90).toFixed(2)); // 1 EUR = 90 INR
  };

  return (
    <>
      <h1>Currency Converter</h1>

      <div>
        <input
          type="number"
          placeholder="Enter USD"
          value={usd}
          onChange={(e) => setUsd(e.target.value)}
        />
        <button onClick={convertUsdToInr}>Convert USD → INR</button>
        {inrFromUsd && <p>INR: {inrFromUsd}</p>}
      </div>

      <div>
        <input
          type="number"
          placeholder="Enter EUR"
          value={eur}
          onChange={(e) => setEur(e.target.value)}
        />
        <button onClick={convertEurToInr}>Convert EUR → INR</button>
        {inrFromEur && <p>INR: {inrFromEur}</p>}
      </div>
    </>
  );
}

export default App;import React, { useState } from "react";

function App() {
  const [usd, setUsd] = useState("");
  const [eur, setEur] = useState("");
  const [inrFromUsd, setInrFromUsd] = useState("");
  const [inrFromEur, setInrFromEur] = useState("");

  const convertUsdToInr = () => {
    setInrFromUsd((usd * 83).toFixed(2)); // 1 USD = 83 INR
  };

  const convertEurToInr = () => {
    setInrFromEur((eur * 90).toFixed(2)); // 1 EUR = 90 INR
  };

  return (
    <>
      <h1>Currency Converter</h1>

      <div>
        <input
          type="number"
          placeholder="Enter USD"
          value={usd}
          onChange={(e) => setUsd(e.target.value)}
        />
        <button onClick={convertUsdToInr}>Convert USD → INR</button>
        {inrFromUsd && <p>INR: {inrFromUsd}</p>}
      </div>

      <div>
        <input
          type="number"
          placeholder="Enter EUR"
          value={eur}
          onChange={(e) => setEur(e.target.value)}
        />
        <button onClick={convertEurToInr}>Convert EUR → INR</button>
        {inrFromEur && <p>INR: {inrFromEur}</p>}
      </div>
    </>
  );
}

export default App;


--phhone directory--
import React, { useState } from "react";

function ContactBook() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddContact = () => {
    if (!name || !phone) return;

    const newContact = { name, phone };
    if (editIndex !== null) {
      const updated = [...contacts];
      updated[editIndex] = newContact;
      setContacts(updated);
      setEditIndex(null);
    } else {
      setContacts([...contacts, newContact]);
    }

    setName("");
    setPhone("");
  };

  const handleEdit = (i) => {
    setName(contacts[i].name);
    setPhone(contacts[i].phone);
    setEditIndex(i);
  };

  const handleDelete = (i) => {
    setContacts(contacts.filter((_, index) => index !== i));
  };

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Contact Book</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleAddContact}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <input
        placeholder="Search contact"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredContacts.map((c, i) => (
          <li key={i}>
            {c.name} - {c.phone}{" "}
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactBook;


--cal--
import { useState } from "react";
import "./App.css";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (op) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) return setResult("Enter valid numbers");
    switch (op) {
      case "+": setResult(n1 + n2); break;
      case "-": setResult(n1 - n2); break;
      case "*": setResult(n1 * n2); break;
      case "/": setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by 0"); break;
      default: setResult(null);
    }
  };

  return (
    <div className="App" style={{ textAlign: "center", padding: "30px" }}>
      <h2>🧮 Calculator</h2>
      <input value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter Num 1" />
      <input value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter Num 2" />
      <div>
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("*")}>*</button>
        <button onClick={() => calculate("/")}>/</button>
      </div>
      <h3>Result: {result}</h3>
    </div>
  );
}
