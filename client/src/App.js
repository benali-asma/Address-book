import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LOGIN from "./components/LOGIN"
import Register from "./components/Register";
import ListTodos from "./components/ListTodos";
import InputTodo from "./components/InputTodo";



function App() {
  return (
    <Router>
   <nav >
    <div className="d-flex justify-content-between ">  
      <Link to="/Register"> Register </Link>
      <Link to="/" > LOGIN </Link>
      <Link to="/InputTodo"> InputTOdo </Link>
      <Link to="/ListTodos"> ListTodos </Link>
 
      </div>
    
  </nav>
    <Routes>
      <Route path="/" element={<LOGIN />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/ListTodos" element={<ListTodos />} />
      <Route path="/InputTOdo" element={<InputTodo />} />
    </Routes>
  
  </Router>

  
  );
}

export default App;