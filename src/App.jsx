import "./App.css";
import { NavbarContainer } from "./components/layout/navbar/NavbarContainer";
import { FooterContainer } from "./components/layout/footer/FooterContainer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <NavbarContainer />
      {/* <ItemDetailContainer /> */}
      <ItemListContainer />
      <FooterContainer />
    </>
  );
}

export default App;
