import './productForm.styles.css'
import { useState } from 'react'

const ProductForm = (props) => {

    const [productValue, setProductValue] = useState("")
    const [quantityValue, setQuantityValue] = useState("")

    // console.log(productValue);
    // console.log(quantityValue);

    const onChangeProduct = (value) => {
        setProductValue(value)
    }
    const onChangeQuantity = (value) => {
        setQuantityValue(value)
    }


    // onInputs({ productName: productValue, productQuantity: quantityValue });



    return (
        <>
            <input className="producto"
                type="text"
                onChange={e => onChangeProduct(e.target.value)}
                placeholder="PRODUCTO"
                value={productValue}
            />

            <input className="cantidad"
                type="text"
                placeholder='CANTIDAD'
                onChange={e => onChangeQuantity(e.target.value)}
                value={quantityValue}
            />

            <button className='buttonAdd' onClick={() => props.productAdd({ productName: productValue, productQuantity: quantityValue })} >
                +
            </button>
        </>


    )
}




export default ProductForm