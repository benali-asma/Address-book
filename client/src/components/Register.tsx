import {useState} from "react";
import {useNavigate} from "react-router-dom";

import "./LOGIN";

import "./Register.css";


export default function Register() {
    const [name,setname]= useState("")
    const [username,setUsername]= useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [confirmpassword,setConfirmpassword]= useState("")
   
   
   
    const HandleName = (e:any)=>{
        setname( e.target.value)
    }
    const HandleUsername = (e:any)=>{
        setUsername( e.target.value)
    }
    const HandleEmail = (e:any)=>{
        setEmail( e.target.value)
    }
    const HandlePassword = (e:any)=>{
        setPassword( e.target.value)
    }
    const HandleConfirmpassword = (e:any)=>{
        setConfirmpassword( e.target.value)
    }
    function sign(){
        navigate("/");
  }

    let navigate = useNavigate();


    const onSubmitForm = async (e:any) => {
        e.preventDefault();
        try {
          const body = { name,username,email,password,confirmpassword };
         
        
          await fetch("http://localhost:5000/client", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)

          }).then((response) => response.json())
          .then((data) => {
              if (data.error===false) {
                  alert("register succeful !");
              }else{
                alert("register failed !");
              }});
        
          sign();
        } catch (err) {
          console.log(err);
        }
      };


return(

    <div className="d-flex justify-content-center align-items-center background-color: darkslategrey;
}">
        <div className="card"><div  className="container__clz">
           
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
                             <br/> <br/> <br/> <br/>
                              <button
                               onClick={(onSubmitForm)=>
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
