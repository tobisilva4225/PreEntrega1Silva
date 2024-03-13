import { Link } from "react-router-dom";
import "./Navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <>
      <nav className="">
        <ul className="nav">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/doavc2x22/image/upload/v1707284351/ks1-logo_jsrsod.png"
              className="logo"
            />
          </Link>
          <Link to="/">
            <li className="btn btn-outline-light">Inicio</li>
          </Link>

          <div className="dropdown">
            <button
              className=" btn btn-outline-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Productos
            </button>
            <ul className="dropdown-menu bg-black">
              <Link to="/list">
                <li className="dropdown-item ">Todos</li>
              </Link>

              <Link to="/category/camperas">
                <li className="dropdown-item">camperas</li>
              </Link>

              <Link to="/category/remeras">
                <li className="dropdown-item">remeras</li>
              </Link>

              <Link to="/category/gorras">
                <li className="dropdown-item">gorras</li>
              </Link>

              <Link to="/category/parches">
                <li className="dropdown-item">parches</li>
              </Link>

              <Link to="/category/mangas">
                <li className="dropdown-item">mangas</li>
              </Link>

              <Link to="/category/stickers">
                <li className="dropdown-item">stickers</li>
              </Link>
            </ul>
          </div>
          <Link to="/">
            <li className="btn btn-outline-light">Nosotros</li>
          </Link>
          <Link to="/">
            <li className="btn btn-outline-light">Contacto</li>
          </Link>
          <Link to="/cart">
            <div className="btn btn-outline-light divCart">
              <CartWidget />
            </div>
          </Link>
        </ul>
      </nav>
    </>
  );
};
