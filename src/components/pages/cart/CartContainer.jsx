import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export const CartContainer = () => {
  const { cart, clearCart, removeById } = useContext(CartContext);

  return (
    <>
      <div>
        {cart.map((product) => (
          <div
            key={product.id}
            className="border border-3 w-50 border-black d-flex m-3 "
          >
            <img src={product.img} alt="" className=" w-75" />
            <div>
              <h2>{product.description}</h2>
              <h2>${product.price}</h2>
              <h2>cantidad:{product.quantity}</h2>
              <button onClick={() => removeById(product.id)}>eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={clearCart} className="btn btn-secondary">
        Limpiar Carrito
      </button>
      <Link to="/checkout">
        <button>Terminar compra</button>
      </Link>
    </>
  );
};
