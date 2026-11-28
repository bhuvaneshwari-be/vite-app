import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 100000,
});

export default function AxiosInstance(){
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    const fetchUsers = async () => {
        try{
            const response = await api.get("/users");
            setData(response.data.users);
            setError("");
        }
        catch(error){
            setError(error.message);
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return(
        <div>
            <h3>Users Name List</h3>
            {error ? (
                <button onClick={() => window.location.reload()}>Retry Fetch User</button>
            ) : (
                <ul>
                    {data.map(user => (
                        <li key={user.id}>{user.firstName} {user.lastName}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}