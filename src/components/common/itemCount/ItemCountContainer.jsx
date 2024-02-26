import { useState } from "react";
import { ItemCount } from "./ItemCount";

export const ItemCountContainer = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  const addOne = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("Stock Maximo");
    }
  };

  const subOne = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return <ItemCount counter={counter} addOne={addOne} subOne={subOne} />;
};
