import "./productForm.styles.css";
import { useState } from "react";

const ProductForm = (props) => {
    const [productValue, setProductValue] = useState("");
    const [quantityValue, setQuantityValue] = useState("");

    const onChangeProduct = (value) => {
        setProductValue(value);
    };
    const onChangeQuantity = (value) => {
        setQuantityValue(value);
    };

    const triggerClick = () => {
        props.productAdd({
            productName: productValue,
            productQuantity: quantityValue,
        });
        setProductValue(""), setQuantityValue("");
    };

    return (
        <>
            <input
                className="producto"
                autoFocus
                type="text"
                maxLength="25"
                onChange={(e) => onChangeProduct(e.target.value)}
                placeholder="PRODUCTO"
                value={productValue}
            />

            <input
                className="cantidad"
                type="text"
                maxLength="10"
                placeholder="CANTIDAD"
                onChange={(e) => onChangeQuantity(e.target.value)}
                value={quantityValue}
            />

            <button className="buttonAdd" onClick={triggerClick}></button>
        </>
    );
};

export default ProductForm;
