import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../productsMock";
import { CartContext } from "../../../context/CartContext";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProduct(id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    addToCart(infoProducto);
  };

  return (
    <>
      {isLoading ? (
        <div className="spinner-border spinner" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ItemDetail item={item} onAdd={onAdd} />
      )}
    </>
  );
};
