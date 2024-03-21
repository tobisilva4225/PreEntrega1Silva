import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ img, description, id }) => {
  return (
    <>
      <div className="Card ">
        <div className="card-body bg-black">
          <img src={img} className="card-img-top " alt="" />
          <div className="card-text">
            <h5 className=" text-nowrap ">{description}</h5>
          </div>

          <Link to={`/itemDetail/${id}`}>
            <button className="btn btn-outline-light ">detalles</button>
          </Link>
        </div>
      </div>
    </>
  );
};
