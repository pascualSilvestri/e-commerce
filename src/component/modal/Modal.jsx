import './Modal.css';

const Modal = ({ nombre, set, visible }) => {



  function handleClick(e) {
    if (e.target.value === 'SI') {
      set(true);
      console.log('SI')
    } else {
      set(false);
      console.log('NO')
    }
  }

  return visible ? (
    <div className="modal_contenedor">
      <h2 id="titulo">{nombre}</h2>
      <div className="btn_modal">
        <button onClick={handleClick}value='SI'>SI</button>
        <button onClick={handleClick}value='NO'>NO</button>
      </div>
    </div>
  ) : null;
};

export default Modal;
