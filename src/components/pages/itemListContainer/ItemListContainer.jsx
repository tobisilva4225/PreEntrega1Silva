import { useState, useEffect } from "react";
import { getProducts } from "../../../productsMock";
import { ItemList } from "./ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((resp) => {
      if (category) {
        const productsFilter = resp.filter(
          (product) => product.category === category
        );
        setProducts(productsFilter);
      } else {
        setProducts(resp);
      }

      setIsLoading(false);
    });
  }, [category]);

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
