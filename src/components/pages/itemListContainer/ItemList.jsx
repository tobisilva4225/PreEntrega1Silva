import { ProductCard } from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";

export const ItemList = ({ products }) => {
  return (
    <div className="divContainer">
      {products.map(({ id, img, description, price, stock }) => {
        return (
          <ProductCard
            key={id}
            img={img}
            description={description}
            price={price}
            stock={stock}
          />
        );
      })}
    </div>
  );
};
