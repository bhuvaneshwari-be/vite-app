import { useEffect, useState } from "react";

export default function GetMethod(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('https://dummyjson.com/products');

                const json = await response.json();

                setData(json);
            }

            catch(error){
                console.error(error);
            }

            finally{
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if(loading){
        return <p>Loading.....</p>
    }

    return(
        <div>
            <h2>Products</h2>

            {data.products.map(item => (
                <p key={item.id}>{item.title}</p>
            ))}
        </div>
    )
}