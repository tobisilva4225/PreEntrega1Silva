import { Link } from "react-router-dom";
import { CardWidget } from "../../common/carWidget/CardWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="">
      <ul className="nav">
        <img
          src="https://res.cloudinary.com/doavc2x22/image/upload/v1707252418/ks1-logo_u7bqde.png"
          className="logo"
        />
        <Link to="/">
          <li>Inicio</li>
        </Link>

        <Link to="/list">
          <li>Productos</li>
        </Link>
        <li>Nosotros</li>
        <li>Contacto</li>
        <CardWidget />
      </ul>
    </nav>
  );
};
