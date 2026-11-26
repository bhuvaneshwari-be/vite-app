import {useState, useEffect} from "react";

export default function APICallUseEffect(){
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then(res => res.json())
            .then(data => setUsers(data.users));
    },[]);

    return(
        <>
            <div className="text-center mt-3">
                <h2 className="text-center">API Call using useEffect</h2>
            </div>

            <div className="mt-3 ms-3">
                <h1 className="text-center">Users</h1>
                {users.map(user =>(
                    <p key={user.id}>
                        {user.firstName} {user.lastName}
                    </p>
                )
                )}

            </div>
        </>
    )
}