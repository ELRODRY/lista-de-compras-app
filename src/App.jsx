import { useState, useEffect } from "react";
import "./App.css";
import ProductForm from "./components/ProductForm";

function App() {
  const savedProducts = JSON.parse(localStorage.getItem("InfoProducts")) || [];
  const [products, setProducts] = useState(savedProducts);
  const handleValue = (value) => {
    setProducts((prevState) => [...prevState, value]);
  };

  useEffect(() => {
    localStorage.setItem("InfoProducts", JSON.stringify(products));
  }, [products]);

  const handleDelete = (borrarProducto) => {
    const nuevosProductos = products.filter(
      (producto) => producto !== borrarProducto
    );
    setProducts(nuevosProductos);
  };

  if (!products.length) {
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
              <p className="productoLista">Prodcuto: {producto.productName}</p> <p className="cantidadLista">Cantidad: {producto.productQuantity}</p>
              <button className="buttonDelete" onClick={() => handleDelete(producto)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
