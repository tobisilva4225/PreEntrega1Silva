import { Link } from "react-router-dom";

export const Checkout = ({ envioDeFormulario, capturar, orderId }) => {
  return (
    <div>
      {orderId ? (
        <div className=" d-flex flex-column m-4 p-5 w-100 align-items-center justify-content-center">
          <div className="border border-black bg-success w-25 m-5 p-5">
            <h2 className="text-center">
              gracias por tu compra, tu numero es:{" "}
              <span className="border-bottom   text-white bg-black">
                {" "}
                {orderId}
              </span>
            </h2>
          </div>
          <Link to="/List">
            <button className="btn btn-primary">Seguir comprando</button>
          </Link>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center justify-content-center bg-black w-50 m-5 p-5">
          <h1 className="border-bottom text-white">Formulario de envio:</h1>
          <form
            className="d-flex flex-column w-75 ju "
            onSubmit={envioDeFormulario}
          >
            <input
              className="m-3"
              type="text"
              placeholder="Ingresa tu nombre"
              onChange={capturar}
              name="name"
            />

            <input
              className="m-3"
              type="text"
              placeholder="ingresa tu telefono"
              onChange={capturar}
              name="phone"
            />
            <input
              className="m-3"
              type="text"
              placeholder="ingresa tu email"
              onChange={capturar}
              name="email"
            />
            <button className="btn btn-outline-light w-25 " type="submit">
              Comprar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
