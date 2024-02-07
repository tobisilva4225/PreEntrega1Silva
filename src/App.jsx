import "./App.css"      
import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { ItemListContainer } from "./components/pages/itemListContainer"

function App() {
 
  return (
    
    <div className="main">  
    <Navbar/>
    <ItemListContainer greeting={"hola, como estas?"}/>
    <Footer/>
    </div>
  )
}

export default App
