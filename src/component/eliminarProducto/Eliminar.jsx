import { useState } from "react";
import Modal from "../modal/Modal";

const Eliminar = ({ url, id }) => {
  const [visible, setVisible] = useState(false);
  const [confirmed, setConfirmed] = useState(false); 

  const eliminar = async () => {
    try {
      const tokenLocal = localStorage.getItem('access_token');
      const token = JSON.parse(tokenLocal);
      const response = await fetch(`${url}${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": 'application/json',
          Authorization: `Bearer ${token.access_token}`
        }
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  const borrar = () => {
    setVisible(true);
  }

  const handleModalResponse = (response) => {
    if (response) {
      setConfirmed(true); 
    }
    setVisible(false);
  }

  
  if (confirmed) {
    eliminar();
    setConfirmed(false);
  }

  return (
    <>
      <button onClick={borrar}>Eliminar</button>
      <Modal
        nombre={'Quieres eliminar este elemento'}
        set={handleModalResponse}
        visible={visible}
      />
    </>
  );
}

export default Eliminar;
