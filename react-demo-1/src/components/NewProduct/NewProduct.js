import { useState } from "react";

const NewProduct = (props) => {

    const [productState, setProductsState] = useState(
        {
            name:"",
            price:""
        }
    )

    return (
        <div className="Content">
            <form>
                <h1>Add a Product</h1>

                <label>Name</label>
                <input type="text" label={'name'} name={'name'} onChange={ (e)=>} value={productState.name}/>

                <label>Price</label>
                <input type="text" label={'price'} name={'price'} onChange={props.onChange} value={productState.price}/>

                <button onClick={props.add}>Add Product </button>

            </form>



        </div>
    );

}

export default NewProduct;