import { Counter } from "./Counter"
import "./productCard.css"

export const ProductCard = ({img, titulo, desc, precio}) => {
  return (
  
   
      <div className="card">
        <img src={img} alt="" />
        <h4>{titulo}</h4>
        <h3>{desc}</h3>
        <h3>{precio}</h3>
        <Counter/>
        </div>
   
  )
}
