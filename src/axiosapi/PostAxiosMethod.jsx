import axios from "axios";
import { useState } from "react";

export default function PostAxiosMethod(){

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [username, setUsername] = useState();
    const [data, setdData] = useState();
    const [loading, setLoading] = useState(true);

    const postData = async () => {
        setLoading(false);
        try{
            const response = await axios.post("https://dummyjson.com/users/add",
                {
                    firstName: firstName,
                    lastName: lastName,
                    username: username
                }
            );
            setdData(response.data);
        }

        catch(error){
            console.log(error);
        }

        finally{
            setLoading(false);
        }
    };

    return(
        <>
            <div>
                <h2>User List Adding</h2>
                <input type="text" placeholder="Enter firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <br></br>
                <br></br>
                <input type="text" placeholder="Enter lastname" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <br></br>
                <br></br>
                <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br></br>
                <br></br>
                <button onClick={postData}>Add user</button>
                <br></br>
                <br></br>
                {loading && <p>Loading.....</p>}
                {data && (
                    <div>
                        <h3>User Added Successfully</h3>
                        <p>ID: {data.id}</p>
                        <p>First Name: {data.firstName}</p>
                        <p>Last Name: {data.lastName}</p>
                        <p>Username: {data.username}</p>
                    </div>
                )}
            </div>
        </>
    )
}