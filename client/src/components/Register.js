import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import "./Register.css";
import "./LOGIN";

export default function Register() {
    const [name,setname]= useState("")
    const [username,setUsername]= useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [confirmpassword,setConfirmpassword]= useState("")
   
   
   
    const HandleName = (e)=>{
        setname( e.target.value)
    }
    const HandleUsername = (e)=>{
        setUsername( e.target.value)
    }
    const HandleEmail = (e)=>{
        setEmail( e.target.value)
    }
    const HandlePassword = (e)=>{
        setPassword( e.target.value)
    }
    const HandleConfirmpassword = (e)=>{
        setConfirmpassword( e.target.value)
    }
    function sign(){
        navigate("/");
  }

    let navigate = useNavigate();


    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            console.log(name);
          const body = { name,username,email,password,confirmpassword };
          console.log('test');
          const response = await fetch("http://localhost:5000/client", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)

          });
          sign();
        } catch (err) {
          console.error(err.message);
        }
      };


return(

    <div className="d-flex justify-content-center align-items-center background-color: darkslategrey;
}">
        <div className="card"><div main className="container__clz">
           
    <header className="centered_grid__clz">
                  <h1 style={{marginTop:"40px"}}>Register Page</h1>
    </header>
    
    <section className="centered_grid__clz">
    <form  onSubmit={onSubmitForm}>
                      <div>
                      <div > <label htmlFor="Name">Name</label>
                          <input
                              id="Name"
                              name="Name"
                              placeholder="Insert your Name"
                              onChange={HandleName}
                              style={{marginTop:"25px",marginLeft:"31px"}} 
                          /></div>
                           <div >   <label htmlFor="Username">
                              Username
                          </label>
                          <input
                              id="Username"
                              name="Username"
                              placeholder="Insert your Username"
                              onChange={HandleUsername}
                              style={{marginTop:"40px",marginLeft:"12px"}}
                          /></div>
                          <div>   <label htmlFor="Username">
                         
                          </label>
                          <div> <label htmlFor="email">EMAIL</label>
                          <input
                              id="email"
                              name="email"
                              placeholder="Insert your email"
                              type="email"
                              onChange={HandleEmail}
                              style={{marginTop:"25px",marginLeft:"31px"}} 
                          /></div>

                             <div >   <label htmlFor="password">
                              Password
                              </label>
                              <input
                              id="password"
                              name="password"
                              placeholder="Insert a valid password"
                              type="password"
                              onChange={HandlePassword}
                              style={{marginTop:"40px",marginLeft:"12px"}}
                              /></div>
                                   <div >   <label htmlFor="ConfirmPassword">
                                   ConfirmPassword
                              </label>
                              <input
                              id="ConfirmPassword"
                              name="ConfirmPassword"
                              placeholder="Insert your ConfirmPassword"
                              type="password"
                              onChange={HandleConfirmpassword}
                              style={{marginTop:"40px",marginLeft:"12px"}}
                              /></div>
                             
                              <button type="submit"
                               onClick={()=>
                          {  if(name !== "" && username !== "" && email !== "" && password !== "" && confirmpassword !== "" && password === confirmpassword) 
                             {}}}
                               className="btn"
                               >
                              Register
                          </button>
                            </div>

</div></form>
</section>

</div></div></div>





)
}
