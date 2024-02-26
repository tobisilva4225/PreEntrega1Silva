import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../productsMock";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  useEffect(() => {
    getProducts(+id).then((resp) => {
      setItem(resp);
    });
  }, [id]);

  return <ItemDetail item={item} />;
};
