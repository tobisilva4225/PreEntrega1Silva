import { ItemCountContainer } from "../itemCount/ItemCountContainer";
import "./productCard.css";

export const ProductCard = ({ img, description, price, stock }) => {
  return (
    <div className="divCard">
      <img src={img} alt="" />
      <h3>{description}</h3>
      <h3>${price}</h3>

      <ItemCountContainer stock={stock} />
    </div>
  );
};
