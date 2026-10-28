import { useState } from "react";
import { postAPICall } from "./C_SimpleForm.js";

export default function C_SimpleForm(){

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData ({
            ...formData,
            [fieldName] : fieldValue
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{

            const payload = {
                "id" : 0,
                "title" : formData['product-title'],
                "price" : formData['product-price'],
                "description" : formData['product-description'],
                "category" : formData['product-category'],
                "image" : formData['product-image']
            }

            const response = await postAPICall(payload)

            console.log("Response======>", response)
            
            if(response){
                alert("Product Added Successfully!!!")
            }
            else{
                alert("Failed to add product. Please try again!!!")
            }

        }
        catch(error){
            console.log("Error=====>", error)
            alert("Failed to add product. Please try again!!!")
        }

    }

    return(
        <>
            <div className="container-fluid m-3">
                <div className="h3 text-center text-primary">ADD PRODUCT</div>

                <form onSubmit={handleSubmit}>
                    <div className="ms-5 me-5">
                        <label className="form-label mt-3 ">Product Title</label>
                        <input type="text" name="product-title" className="form-control" onChange={handleChange} required />
                    </div>

                    <div className="ms-5 me-5">
                        <label className="form-label mt-3">Product Price</label>
                        <input type="number" name="product-price" className="form-control" step="any" min="0" onChange={handleChange} required />
                    </div>

                    <div className="ms-5 me-5">
                        <label className="form-label mt-3">Description</label>
                        <input type="text" name="product-description" className="form-control" onChange={handleChange} required />
                    </div>

                    <div className="ms-5 me-5">
                        <label className="form-label mt-3">Category</label>
                        <input type="text" name="product-category" className="form-control" onChange={handleChange} required />
                    </div>

                    <div className="ms-5 me-5">
                        <label className="form-label mt-3">Image URL</label>
                        <input type="url" name="product-image" className="form-control" onChange={handleChange} required />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3 ms-5 me-5">Add Product</button>
                </form>

                
            </div>
        </>
    )
}