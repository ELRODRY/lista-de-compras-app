import { useState } from "react";
import "./App.css";
import ProductForm from "./components/ProductForm";

function App() {
  const [products, setProducts] = useState([
    { productName: "papas", productQuantity: "5" },
    { productName: "pan", productQuantity: "10" },
    { productName: "lechuga", productQuantity: "3" },
  ]);

  const handleValue = (value) => {
    setProducts([value]);
  };

  console.log(products);

  if (products.length == 0) {
    return (
      <>
        <header>
          <h1>Lista de Compras</h1>
        </header>
        <div className="containerInputs">
          <ProductForm productAdd={(value) => handleValue(value)} />
        </div>
        <div className="listado">
          <h2>Listado</h2>
          <p>No hay peoductos añadidos</p>
        </div>
      </>
    );
  }

  return (
    <>
      <header>
        <h1>Lista de Compras</h1>
      </header>
      <div className="containerInputs">
        <ProductForm productAdd={(value) => handleValue(value)} />
      </div>
      <div className="listado">
        <h2>Listado</h2>
        <ul>
          {products.map((producto, i) => (
            <li key={i}>
              {producto.productName}, {producto.productQuantity}
            </li>
          ))}
        </ul>
        ;
      </div>
    </>
  );
}

export default App;
