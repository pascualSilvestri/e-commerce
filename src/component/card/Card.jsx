
import './Card.css'; // Asegúrate de que la ruta al archivo CSS sea correcta


const Card = ({categoria,img}) => {

  return (
    <div className="card">
      <span>{categoria}</span>
      <img className="card_img" src={img} alt="" />
    </div>
  );
};

export default Card;
