import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iphone 15",
      quantity: 0,
      price: 100,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXjd1j5_0weZ74JfoVplGodQqkgg45hGuWyA&s",
    },
    {
      id: 2,
      name: " Samsung S24",
      quantity: 0,
      price: 200,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCTRojs_x7VNr4S9-q78GO3R3YcHlAzvflg&s",
    },
    {
      id: 3,
      name: "Hand Bag",
      quantity: 0,
      price: 300,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMZmyyn2AZuLaNAknFOsd9wpJ_UUthAnIFQ&s",
    },
  ]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  return (
    <>
      <Navbar totalQuantity={totalQuantity} />
      <Cart
        products={products}
        setProducts={setProducts}
        totalQuantity={totalQuantity}
        setTotalQuantity={setTotalQuantity}
      />
    </>
  );
}

export default App;
