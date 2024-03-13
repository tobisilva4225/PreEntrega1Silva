import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ img, description, id }) => {
  return (
    <>
      <div className="Card ">
        <div className="card-body">
          <img src={img} className="card-img-top w-100 h-100" alt="" />
          <div className="card-text">
            <h3 className="card-title">{description}</h3>
          </div>

          <Link to={`/itemDetail/${id}`}>
            <button className="btn  btn-primary">detalles</button>
          </Link>
        </div>
      </div>
    </>
  );
};
