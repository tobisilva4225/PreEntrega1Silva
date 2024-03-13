import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems();
  return (
    <>
      <i className="bi bi-cart2"></i>
      <span>{total}</span>
    </>
  );
};
