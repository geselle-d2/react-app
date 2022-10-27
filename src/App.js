import './App.css';
import Title from "./components/title.js"
import Navbar from "./components/navbar.js"
import Offers from "./components/offers.js"
import TopSellers from "./components/topsellers.js"
import New from "./components/new.js"
import Social from "./components/social.js"
import products from "./components/products"
import React from "react"
import Calculation from './components/calculation';
import Checkout from './components/checkout';
import "bootstrap/dist/css/bootstrap.min.css"



function App() {
  const [comments, setComments]= React.useState(
    [`Ziel der Website ist es interaktiv zu sein, nicht ästhetisch
Sie ist mit React realisiert, d.h. es ist möglich mit ihr zu interagieren, wie z.b. einen Kommentar unten zu verfassen und damit ein neues Kommentarelement zu erstellen.
Der Kommentar wird nicht serverseitig gespeichert. 
Kurzum "Proof of concept"`, 
`die Produktpalette ist ebenfalls interaktiv, die "+"-Buttons fügen zusätzliche Produkte zum Einkaufswagen("cart") hinzu.
Mit einem Click auf den Einkaufswagen ist es möglich die Stückzahl alternativ zu ändern`, 
"to-do: fix bootstrap flickering"]
  )

  function addUserComment(text){
    setComments(prev => (
    [text, ...prev ]
    ))
  }  

  const [cart, setCart] = React.useState([])

  return (
    <div className="App">
      
      <Navbar dropdown={cart} modifyCart={setCart}/>
      <Title />
      <Offers reducedProducts={products} modifyCart = {setCart}/>
      <TopSellers topProducts={products} modifyCart = {setCart}/>
      <New newProducts={products} modifyCart = {setCart}/>
      <Social comments={comments} addComment={addUserComment}/>
      <Calculation calculation={cart}/>
    </div>
  );
}

export default App;
