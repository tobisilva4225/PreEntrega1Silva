import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import "./Cart.css";

export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const limpiarConAlerta = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, limpiar",
      denyButtonText: `No, dejalo como estaba`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Eliminado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  return (
    <div>
      <div className="cart-container mb-5">
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item bg-black">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <h2>${item.price}.-</h2>
                  <h2>Unidades: {item.quantity}</h2>
                </div>
                <button
                  className="btn btn-outline-light"
                  onClick={() => removeById(item.id)}
                >
                  Quitar
                </button>
              </div>
            );
          })}
        </div>
        <div className="cart-info rounded m-5 p-5  align-items-center">
          <h1 className="border-bottom">Descripcion de la compra</h1>
          <h2 className=" ">Tienes {cart.length} productos agregados</h2>

          <h2 className="bg-black  rounded ">
            El total del carrito es ${total}
          </h2>

          {cart.length > 0 ? (
            <div className="btn-cart">
              <button
                className="btn btn-outline-light"
                onClick={limpiarConAlerta}
              >
                Vaciar carrito
              </button>
              <Link to="/checkout">
                <button className="btn btn-outline-light">
                  Finalizar compra
                </button>
              </Link>
            </div>
          ) : (
            <Link to="/List">
              <button className="btn btn-warning">Agrega productos</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
