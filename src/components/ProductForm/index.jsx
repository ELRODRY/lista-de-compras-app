import "./productForm.styles.css";
import { useState } from "react";
import Add from "../../assets/add";

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
            <div className="buttonAddContainer">
                <button className="buttonAdd" onClick={triggerClick}>
                    <Add />
                </button>
            </div>
        </>
    );
};

export default ProductForm;
