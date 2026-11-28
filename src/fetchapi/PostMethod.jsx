import { useState } from "react";
export default function PostMethod(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const postData = async () => {
        setLoading(true);

        try{
            const response = await fetch("https://dummyjson.com/products/add", {
                method: "POST",
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify({
                    title: "Pilgrim Shampoo",
                    stock: 100
                })
            });
            const json = await response.json();
            setData(json);
        }
        
        catch(error){
            console.log(error);
        }

        finally{
            setLoading(false);
        }
    };

    return(
        <div>
            <h2>Post Method</h2>

            <button onClick={postData}>Add Product</button>

            {loading &&  <p>Loading......</p>}

            {data && (
                <div>
                    <h3>Added Products:</h3>
                    <p>Id: {data.id}</p>
                    <p>Title: {data.title}</p>
                    <p>Stock: {data.stock}</p>
                </div>
            )}
        </div>
    )
}