import { useState } from "react";
import userData from "../assets/dummy_json/user.json";
import UserDetails from "./UserDetails";
import AddUserDetails from "./AddUserDetails";
import EditUserDetails from "./EditUserDetails";

export default function UserList(){

    const [users,setUsers] = useState(userData);
    const [edit,setEdit] = useState(false);

    const addUser = (newUser) => {
        newUser.id = users.length > 0
            ? Math.max(...users.map(user => user.id)) + 1
            : 1;

        setUsers([...users,newUser]);
    }

    return(
        <>
            <div className="container mt-3">
                <div className="h2 text-secondary text-center">
                    User Details
                </div>

                <AddUserDetails
                    addUser={addUser}
                />

                {!edit ?
                    (
                        <UserDetails
                            users={users}
                            setUsers={setUsers}
                            setEdit={setEdit}
                        />
                    )
                    :
                    (
                        <EditUserDetails
                            users={users}
                            setUsers={setUsers}
                            setEdit={setEdit}
                        />
                    )
                }
            </div>
        </>
    )
}