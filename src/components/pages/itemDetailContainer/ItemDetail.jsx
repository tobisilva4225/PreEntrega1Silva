import { ItemCountContainer } from "../../common/itemCount/ItemCountContainer";
import "./ItemDetailContainer.css";
export const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <div className="divContainer">
      <div className={"detailContainer"}>
        <div className={"imageContainer"}>
          <img
            src="https://res.cloudinary.com/doavc2x22/image/upload/v1707282622/06_qnedin.jpg"
            alt=""
          />
        </div>

        <div className={"divText"}>
          <h2>Nombre: sadas</h2>
          <h2>Descripcion: asda</h2>
          <h2>Precio $123</h2>
          <div>
            <ItemCountContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
