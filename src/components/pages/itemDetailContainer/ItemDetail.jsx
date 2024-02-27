import { ItemCountContainer } from "../../common/itemCount/ItemCountContainer";
import "./ItemDetailContainer.css";
export const ItemDetail = ({ item }) => {
  return (
    <div className="divContainer">
      <div className={"detailContainer"}>
        <div className={"imageContainer"}>
          <img src={item.img} alt="" />
        </div>

        <div className={"divText"}>
          <h2>Nombre: {item.description}</h2>
          <h2>Categoria: {item.category}</h2>
          <h2>Precio ${item.price}</h2>
          <div>
            <ItemCountContainer stock={item.stock} />
          </div>
        </div>
      </div>
    </div>
  );
};
