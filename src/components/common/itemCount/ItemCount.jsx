import "./ItemCount.css";

export const ItemCount = ({ counter, addOne, subOne }) => {
  return (
    <div className="divCount">
      <button onClick={subOne} disabled={counter === 1 ? true : false}>
        -
      </button>
      <h4>{counter}</h4>
      <button onClick={addOne}>+</button>
      <button>Agregar al Carrito</button>
    </div>
  );
};
