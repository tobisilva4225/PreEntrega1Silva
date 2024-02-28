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
        <Link to="/category/camperas">
          <li>camperas</li>
        </Link>
        <Link to="/category/remeras">
          <li>remeras</li>
        </Link>
        <Link to="/category/gorras">
          <li>gorras</li>
        </Link>
        <Link to="/category/parches">
          <li>parches</li>
        </Link>
        <Link to="/category/mangas">
          <li>mangas</li>
        </Link>
        <Link to="/category/stickers">
          <li>stickers</li>
        </Link>
        <CardWidget />
      </ul>
    </nav>
  );
};
