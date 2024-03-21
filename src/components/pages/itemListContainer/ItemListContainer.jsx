import { useState, useEffect } from "react";
import { db } from "../../../FirebaseConfig";
import { ItemList } from "./ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let productsColection = collection(db, "products");

    let consulta = productsColection;

    if (category) {
      let productsColectionFiltered = query(
        productsColection,
        where("category", "==", category)
      );
      consulta = productsColectionFiltered;
    }

    getDocs(consulta)
      .then((res) => {
        let arrayLindo = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });
        setProducts(arrayLindo);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  return (
    <>
      {isLoading ? (
        <div className="spinner-border spinner" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};
