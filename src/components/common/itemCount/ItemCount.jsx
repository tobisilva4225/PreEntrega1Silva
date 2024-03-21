import "./ItemCount.css";

export const ItemCount = ({ counter, addOne, subOne, onAdd }) => {
  return (
    <div className="divCount">
      <button
        className="btn btn-outline-light"
        onClick={subOne}
        disabled={counter === 1 ? true : false}
      >
        -
      </button>
      <h4>{counter}</h4>
      <button className="btn btn-outline-light" onClick={addOne}>
        +
      </button>
      <button className="btn btn-outline-light" onClick={() => onAdd(counter)}>
        Agregar al Carrito
      </button>
    </div>
  );
};
