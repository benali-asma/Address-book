import {useState} from "react";
import { useNavigate} from "react-router-dom";

import"./Login.css";




export default function LOGIN() {
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")



const HandleEmail = (e:any)=>{
    setEmail( e.target.value)
}
const HandlePassword = (e:any)=>{
    setPassword(e.target.value)
}

function sign(){
      navigate("/Register")
}


    let navigate = useNavigate();


    

    async function handleFormOnSubmitEvent() {
        
  
   await fetch('http://localhost:5000/client/login', {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        email: email,
        password: password,
    }),
})
    .then((response) => response.json())
    .then((data) => {
        if ( data.error === false) {
          
            navigate("/InputTodo")
        }
             else {
            alert("verifier vos données");
        }
    })
    .catch((err) => console.log(err));
}

    return (
    
        <div className="d-flex justify-content-center align-items-center background-color: white;
    }">
            <div className="card"><div className="container__clz">
        <header className="centered_grid__clz">
                      <h1 style={{marginTop:"40px"}}>Login Page</h1>
                  </header>
                  <section className="centered_grid__clz">
                      <div>
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
                       
                          <button
                                
                                onClick={()=>
                                    {
                                        if(email!=="" && password!==""){
                                            handleFormOnSubmitEvent()
                                         
                                        }
                                    }

                                }

                                  style={{marginLeft: "96px",
                                    marginTop: "54px"}}
                          >
                              Login
                          </button>
                           <button onClick={()=>
                           {sign()}}
                           style={{marginLeft: "12px",
                           marginTop: "54px"}}
                           >Register
                           </button>
                          <footer>
                            2022/2023
                          </footer>
                      </div>
                  </section>
                  </div></div>
        
                  </div>
    )
}