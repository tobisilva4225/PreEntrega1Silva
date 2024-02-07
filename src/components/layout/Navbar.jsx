import { CardWidget } from "../common/CardWidget"
import "./Navbar.css"


export const Navbar = ()=>{

return <nav className="">
    <ul className="navbar">
      <img src="https://res.cloudinary.com/doavc2x22/image/upload/v1707252418/ks1-logo_u7bqde.png" className="logo" />

        <li>Inicio</li>
        <li>Productos</li>
        <li>Nosotros</li>
        <li>Contacto</li>
        <CardWidget/>
    </ul>
</nav>

}