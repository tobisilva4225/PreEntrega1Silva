import { ProductCard } from "../common/ProductCard"
import "./ItemListContainer.css"

export const ItemListContainer = ({greeting})=>{
    return  <div>
            <h1>{greeting}</h1>
        
        <div className="divContainer">
            <ProductCard img={"https://res.cloudinary.com/doavc2x22/image/upload/v1707282622/06_qnedin.jpg"} titulo={"algo"} desc={"descripcion"} precio={100}/>
            <ProductCard img={"https://res.cloudinary.com/doavc2x22/image/upload/v1707282621/05_qxs5md.jpg"} titulo={"algo mas"} desc={"descripcion 2"} precio={1200}/>
            <ProductCard img={"https://res.cloudinary.com/doavc2x22/image/upload/v1707282621/02_b4tcko.jpg"} titulo={"algo qsy"} desc={"descripcion cual"} precio={1300}/>
           </div>
    </div> 
    
    
}
 