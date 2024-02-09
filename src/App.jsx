import { useState } from "react";
import "./App.css";
import ProductForm from "./components/ProductForm";

function App() {
  const [products, setProducts] = useState([]);

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
        <p>
          productos, {products[0].productName}-{products[0].productQuantity}
        </p>


      </div>
    </>
  );
}

export default App;
