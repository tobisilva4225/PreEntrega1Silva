import { addDoc, collection } from "firebase/firestore";
import { db } from "./FirebaseConfig";
import { products } from "./productsMock";

export const AgregarDocs = () => {
  const rellenar = () => {
    let productsCollection = collection(db, "products");
    products.forEach((product) => {
      addDoc(productsCollection, product);
    });
  };

  return (
    <div>
      <button onClick={rellenar}>agregar documentos</button>
    </div>
  );
};
