import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function deleteHandler() 
  {
    setModalIsOpen(true);
  }

  function closeModalHandler() 
  {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {/* expression ternaire : if modalIsOpen is true, we render Modal, else, we output anything and render null */}
      {/* {modalIsOpen ? <Modal /> : null} */}
      {/* Same expression but shorter : if both operator is true, the 2nd value will be returned */}
      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> }
      { modalIsOpen && <Backdrop onCancel={closeModalHandler} /> }
      {/* we see that the onCancel name is the same than in Backdrop.js file */}
    </div>
  );
}

export default Todo;
