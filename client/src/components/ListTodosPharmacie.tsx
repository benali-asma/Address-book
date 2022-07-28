import { Fragment, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from "./SidebarData";
import { IconContext } from 'react-icons';




import EditTodo from "./EditTodo";



import"./List.css";
import './Navbar.css';




const ListTodosPharmacie = () => {
  const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);
  const [todos, setTodos] = useState([]);

  const [addtodo,settodo]=useState("");


  const deleteTodo = async (id:any) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter((todo:any) => todo.todo_id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  async function getTodos() {
    

   await fetch("http://localhost:5000/todos/ListTodosPharmacie", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      
        "role":"pharmacie"
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error === false) {
        
         setTodos(data.data); }
      })
      .catch((err) => console.log(err));
  }



  useEffect(() => {
    getTodos();
  }, [addtodo]);


  return (
    <Fragment>
    <IconContext.Provider value={{ color: '#fff' }}>
    <div className='navbar'>
      <Link to='#' className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar} />
      </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='navbar-toggle'>
          <Link to='#' className='menu-bars'>
            <AiIcons.AiOutlineClose />
          </Link>
        </li>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span >{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  </IconContext.Provider>
  
      <table className="table mt-5 text-center ">
       <thead>
          <tr>
           <th>nom</th>
           <th>adresse</th>
           <th>numero télé</th>
           <th>rôle</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo:any) => (
            <tr key={todo.todo_id}>
              <td>{todo.nom}</td>
              <td>{todo.adresse}</td>
              <td>{todo.num}</td>
              <td>{todo.role}</td>
              <td>
              <EditTodo todo={todo}  settodo={settodo}/>
               


                 </td>
              <td>
                <Button
                  className="btnn"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </Fragment>
  );
};

export default ListTodosPharmacie;