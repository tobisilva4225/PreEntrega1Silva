import "./productCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ img, description, price, id }) => {
  return (
    <div className="divCard">
      <img src={img} alt="" />
      <h3>{description}</h3>
      <h3>${price}</h3>

      <Link to={`/itemDetail/${id}`}>
        <button>mas informacion</button>
      </Link>
    </div>
  );
};
