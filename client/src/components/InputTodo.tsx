import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import Select from "react-select";
import { IconContext } from "react-icons";
import { Fragment, useState } from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";
import { useNavigate } from "react-router-dom";


import "./ListTodos";


import "./Navbar.css";
import "./Login.css";


const InputTodo = () => {
  const [nom, setNom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [num, setNum] = useState("");
  const [choix, setChoix] = useState("");

  const HandleNom = (e: any) => {
    setNom(e.target.value);
  };

  const HandleAdresse = (e: any) => {
    setAdresse(e.target.value);
  };

  const HandleNum = (e: any) => {
    setNum(e.target.value);
  };

  let navigate = useNavigate();
  async function handleFormOnSubmitEvent() {
  

    await fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nom: nom,
        adresse: adresse,
        num: num,
        role:choix,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error === false ) {
          navigate("/ListTodos");
        }
      })
      .catch((err) => console.log(err));
  }

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      <Fragment>
        <h1 className="bienvenue text-center mt-5">Bienvenue</h1>
        <br/><br/><br/><br/>
        <div className='"d-flex align-items-start flex-column"'>
          <div
          
            className="d-flex mt-5"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30vh",
            }}
          >
            <div>
            <Select 
         placeholder="Select"
        name="choix"
        
        value=
        {choix === "" ? null : { 
          label: choix,
          value: choix,
        }}
        options=
        
        {[
          {
            label: "doctor",
            value: "doctor",
          },
          {
            label: "pharmacie",
            value: "pharmacie",
          },
       
          {
            label: "Restaurant",
            value: "Restaurant",
          }
        ]}    
         onChange={(e:any)=>setChoix(e.value)} 
        
      />
            <br /><br />
              <InputGroup >
                <InputGroupText>Nom et prenom</InputGroupText>
                <Input onChange={HandleNom}
                 placeholder="Insert nom et prenom" />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupText>Adresse</InputGroupText>
                <Input onChange={HandleAdresse}
                 placeholder="Insert an adresse" />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupText>Numero télé</InputGroupText>
                <Input onChange={HandleNum}
                 placeholder="Insert a  numero" />
              </InputGroup>
             
              <br /><br />
             

              <button className="bet"
                onClick={() => {
                  if(nom!=="" && adresse!==""&&num!==""){
                  handleFormOnSubmitEvent();
                }}}
                style={{ marginLeft: "96px", marginTop: "54px" }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </Fragment>
      ;
    </>
  );
};
export default InputTodo;
