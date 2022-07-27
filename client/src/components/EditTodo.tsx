import{useState } from "react";
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';



import "./List.css";
 


type edittype={

  todo:any ,settodo:Function
 }


const EditTodo = ({todo,settodo}:edittype) => {
   console.log(todo)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nom, setNom] = useState(todo.nom);
  const [adresse, setAdresse] = useState(todo.adresse);
  const [num, setNum] = useState(todo.num);
  const [role, setRole] = useState(todo.role);


  const updateDescription = async (e:any )=> {
    
    try {
    
      let id=todo.todo_id
      const body = {nom,id,adresse,num,role};
      fetch(
        `http://localhost:5000/edittodo`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );
      settodo(todo.todo_id)
      handleClose()
   
    } catch (err) {
      console.log(err);
    }
  };

  return (


    <>
    <Button variant="primary" onClick={handleShow}>
     Edit
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <input
        type="text"
        className="form-control"
        value={nom}
        onChange={(e:any)=>setNom(e.target.value)}></input>
       
         <input
        type="text"
        className="form-control"
        value={adresse}
        onChange={(e:any)=>setAdresse(e.target.value)}></input>
         <input
        type="text"
        className="form-control"
        value={num}
        onChange={(e:any)=>setNum(e.target.value)}></input>
         <input
        type="text"
        className="form-control"
        value={role}
        onChange={(e:any)=>setRole(e.target.value)}></input>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={updateDescription}>
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  </>


   
  );
};

export default EditTodo;
