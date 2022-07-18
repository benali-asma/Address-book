const express = require('express');
const cors = require("cors");
const app = express();

const pool = require("./db");
const { Pool } = require('pg');
app.use(cors());
app.use(express.json());








app.post("/client",async(req,res)=>{
  try{  
const {name,username,email,password,confirmpassword}=req.body;
console.log(req.body);
let sql = `INSERT INTO client (name,username,email,password,confirmpassword) VALUES('${name}','${username}','${email}','${password}','${confirmpassword}')`
console.log(sql)
const newClient=await pool.query(sql)
  
  res.json(newClient.rows[0]);
}catch(error){
    console.error(error.message);
  }
})



app.post("/todos",async(req,res)=>{
  try{  
const {description}=req.body;
const newTodo=await pool.query(
  "INSERT INTO todo (description) VALUES($1) RETURNING* ",
  [description]
  );
  res.json(newTodo.rows[0]);
}catch(erreur){
    console.error(err.message);
  }
})

app.get("/todos",async(req,res)=>{
  try{
const alltodos=await pool.query(
  "SELECT * FROM todo");
  res.json(alltodos.rows)
}catch (err){
  console.error(err.message)
}
})
app.get("/todos/:id",async(req,res)=>{
  try{
const {id}=req.params;
const todo=await pool.query("SELECT * FROM todo WHERE todo_id= $1",[id])
res.json(todo.rows[0]);

}catch (err){
  console.error(err.message)
}
})
app.put("/todos/:id",async(req,res)=>{
  try{
    const {id} = req.params;
    const{description}=req.body;
    const updatetodo=await pool.query("UPDATE todo SET description =$1 WHERE todo_id=$2",[description,id]
    );
    res.json("todo updated")
  }
  catch(err){
    console.error(err.message);
  }
})
app.delete("/todos/:id",async(req,res)=>{
  try{
    const {id} = req.params;
    const deletetodo=await pool.query("DELETE FROM todo WHERE todo_id =$1 ",[id]
    );
    res.json("todo deleted !!")
  }
  catch(err){
    console.error(err.message);
  }
})
app.listen(5000, () => {
  console.log("server has started on port 5000");
});