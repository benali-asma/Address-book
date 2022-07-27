import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Restaurant from "./components/Restaurant";
import LOGIN from "./components/LOGIN"
import Register from "./components/Register";
import ListTodosDoctor from "./components/ListTodosDoctor";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import ListTodosPharmacie from "./components/ListTodosPharmacie";


import "./App.css";

export default function App() {

  return (

   
      <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LOGIN />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/ListTodos" element={<ListTodos />} />
                    <Route path="/InputTOdo" element={<InputTodo />} />
                    <Route path="/ListTodosDoctor" element={<ListTodosDoctor />} />
                    <Route path="/ListTodosPharmacie" element={<ListTodosPharmacie />} />
                    <Route path="/Restaurant" element={<Restaurant />} />
             
               
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
  
  
  );
}

