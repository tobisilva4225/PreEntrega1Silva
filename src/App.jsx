import "./App.css";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeContainer } from "./components/pages/home/HomeContainer";
import { Layout } from "./components/layout/Layout";
import { CartContainer } from "./components/pages/cart/CartContainer";
import { CheckoutContainer } from "./components/pages/checkout/CheckoutContainer";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomeContainer />} />
              <Route path="/list" element={<ItemListContainer />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/checkout" element={<CheckoutContainer />} />
            </Route>
            <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
