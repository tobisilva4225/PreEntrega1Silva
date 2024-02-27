import "./App.css";
import { NavbarContainer } from "./components/layout/navbar/NavbarContainer";
import { FooterContainer } from "./components/layout/footer/FooterContainer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeContainer } from "./components/pages/home/HomeContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/list" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        </Routes>
        <FooterContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
