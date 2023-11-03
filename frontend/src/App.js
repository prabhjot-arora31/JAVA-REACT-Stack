import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import Hmm from "./hmm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./register";
import Update from "./Update";
import Delete from "./delete";

function App() {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [mainArray, setmainArray] = useState([]);
  const [id, setid] = useState("");
  return (
    <BrowserRouter>
      <h2>Java API Project</h2>
      <Routes>
        <Route
          path="/"
          element={
            <Register
              name={name}
              phone={phone}
              email={email}
              mainArray={mainArray}
              setname={setname}
              setphone={setphone}
              setemail={setemail}
              setmainArray={setmainArray}
              setid={setid}
            />
          }
        />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/delete/:id" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
