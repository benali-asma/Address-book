import express, { Application, Request, Response } from "express";
import pool from "./db";
import cors from "cors";
import { cpuUsage } from "process";

const app: Application = express();
app.use(cors());
app.use(express.json());




app.post("/client/login",async(req:Request,res:Response)=>{
  try{
    const {email,password}=req.body;
     let sql =  ` SELECT * FROM client where  email='${email}' and  password='${password}'`;
const newClient=await pool.query(sql)

if(newClient.rowCount > 0){
  res.json({"error":false,"data":newClient.rows[0]})
}else{
  res.json({"error":true,"message":"there's an error !!"})
}
  
}catch (error){
  console.log(error)
}
})




app.post("/client",async(req,res)=>{
  try{  
const {name,username,email,password,confirmpassword}=req.body;
let sql = `INSERT INTO client (name,username,email,password,confirmpassword) VALUES('${name}','${username}','${email}','${password}','${confirmpassword}') returning * `

const newClient=await pool.query(sql)
if(newClient.rowCount>0){
  res.json({"error": false, "data":newClient.rows[0]});
}else{
  res.json({"error": true, "data":"there's an error !!"});
}
  
}catch(error){
    console.log(error);
  }
})



app.post("/todos",async(req,res)=>{
  try{  

const { nom , adresse, num,role}=req.body;

let sql=`INSERT INTO todo (nom , adresse, num,role) VALUES('${nom}','${adresse}','${num}','${role}')returning *`

const newTodo=await pool.query(sql);
if(newTodo.rowCount>0){
  res.json({"error": false, "data":newTodo.rows[0]});
}else{
  res.json({"error": true, "data":"there's an error !!"});
}
  
}catch(error){
    console.log(error);
  }
})

app.post("/todos/ListTodo",async(req,res)=>{
  try{
   
    let sql=`SELECT * FROM todo `
   
    
    const alltodos=await pool.query(sql)
  if(alltodos.rowCount>0){
    res.json({"error": false, "data":alltodos.rows});
  }else{
    res.json({"error": true, "data":"there's an error !!"});
  }
  
  
}catch (err){
  console.log(err)
}
})


app.post("/todos/ListTodosDoctor",async(req,res)=>{
  try{
    const {role}=req.body;
    let sql=`SELECT * FROM todo WHERE role='${role}'`
   
    
    const alltodos=await pool.query(sql)
  if(alltodos.rowCount>0){
    res.json({"error": false, "data":alltodos.rows});
  }else{
    res.json({"error": true, "data":"there's an error !!"});
  }
  
  
}catch (err){
  console.log(err)
}
})

app.post("/todos/ListTodosPharmacie",async(req,res)=>{
  try{
    const {role}=req.body;
    let sql=`SELECT * FROM todo WHERE role='${role}'`
   
    
    const alltodos=await pool.query(sql)
  if(alltodos.rowCount>0){
    res.json({"error": false, "data":alltodos.rows});
  }else{
    res.json({"error": true, "data":"there's an error !!"});
  }
  
  
}catch (err){
  console.log(err)
}
})
app.post("/todos/hopital",async(req,res)=>{
  try{
    const {role}=req.body;
    let sql=`SELECT * FROM todo WHERE role='${role}'`
   
    
    const alltodos=await pool.query(sql)
  if(alltodos.rowCount>0){
    res.json({"error": false, "data":alltodos.rows});
  }else{
    res.json({"error": true, "data":"there's an error !!"});
  }
  
  
}catch (err){
  console.log(err)
}
})



app.post("/todos/Restaurant",async(req,res)=>{
  try{
    const {role}=req.body;
    let sql=`SELECT * FROM todo WHERE role='${role}'`
   
    
    const alltodos=await pool.query(sql)
  if(alltodos.rowCount>0){
    res.json({"error": false, "data":alltodos.rows});
  }else{
    res.json({"error": true, "data":"there's an error !!"});
  }
  
  
}catch (err){
  console.log(err)
}
})




app.get("/todos/:id",async(req,res)=>{
  try{
const {id}=req.params;
const todo=await pool.query("SELECT * FROM todo WHERE todo_id= $1",[id])
res.json(todo.rows[0]);

}catch (err){
  console.log(err)
}
})
app.put("/edittodo",async(req,res)=>{
  try{
   
    const{nom,id,adresse,num,role}=req.body;
    let sql=`UPDATE todo SET nom='${nom}',adresse='${adresse}',num='${num}',role='${role}' WHERE todo_id=${id}`

  
   const updatetodo=await pool.query(sql)

  res.json(updatetodo.rows[0]);
  }
  catch(err){
    console.log(err);
  }
})
app.delete("/todos/:id",async(req,res)=>{
  try{
    const {id} = req.params;
    await pool.query("DELETE FROM todo WHERE todo_id =$1 ",[id]
    );
    res.json("todo deleted !!")
  }
  catch(err){
    console.log(err);
  }
})
app.listen(5000, () => {
  console.log("server has started on port 5000");
});