import {useState} from 'react'

export const Counter = () => {
    
    const [counter, setCounter] = useState(0)
    
    const sumar =()=>{
        setCounter(counter + 1)
    }

    const restar =()=>{
        setCounter(counter - 1)
    }

  return (
    <div>
        <button onClick={sumar}>Agregar</button>
        <h4>{counter}</h4>
        <button onClick={restar}>Quitar</button>
    </div>
  )
}
