import  axios  from "axios";
import { useState, useEffect } from "react";

export default function GetAxiosMethod(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () =>{
        try{
            const response = await axios.get("https://dummyjson.com/users");
            setData(response.data);
        }

        catch(error){
            console.log(error);
        }

        finally{
            setLoading(false);
        }
    };

    fetchData();
    }, []);

    if(loading){
        return <p>Loading......</p>
    }

    return(
        <div>
            <h3>Users List</h3>
            {data.users.map(user => (
                <div key={user.id}>
                    <p>{user.firstName} {user.lastName}</p>
                    <p>{user.username}</p>
                </div>
            ))}
        </div>
    )
}