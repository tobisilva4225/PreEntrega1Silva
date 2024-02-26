import { useState, useEffect } from "react";
import { getProducts } from "../../../productsMock";
import { ItemList } from "./ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts().then((resp) => {
      setProducts(resp);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="spinner-border spinner" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};
