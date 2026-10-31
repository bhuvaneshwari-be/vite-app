import { useState } from "react";

export default function EditUserDetails({
    users,
    setUsers,
    setEdit
}){

    const [userState,setUserState] = useState([]);

    const handleSave = (userId) => {

        const updatedUsers = users.map((user) => {

            return user.id === userId
                ? userState[userId] ?? user
                : user;

        });

        setUsers(updatedUsers);
        setEdit(false);
    }

    const handleChange = (e,user) => {

        setUserState({
            ...userState,
            [user.id]: {
                ...user,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleNameChange = (e,user) => {

        setUserState({
            ...userState,
            [user.id]: {
                ...user,
                name: {
                    ...user.name,
                    [e.target.name]: e.target.value
                }
            }
        });
    }

    return(
        <>
            <div className="mt-3">

                <h4 className="text-secondary">Edit User Details</h4>

                <table className="table table-bordered text-center">

                    <thead className="table-dark">
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => {

                            const currentUser = userState[user.id] ?? user;

                            return(
                                <tr key={user.id}>

                                    <td>{user.id}</td>

                                    <td>
                                        <input
                                            type="text"
                                            name="firstname"
                                            className="form-control"
                                            value={currentUser.name.firstname}
                                            onChange={(e) => handleNameChange(e,user)}
                                        />
                                    </td>

                                    <td>
                                        <input
                                            type="text"
                                            name="lastname"
                                            className="form-control"
                                            value={currentUser.name.lastname}
                                            onChange={(e) => handleNameChange(e,user)}
                                        />
                                    </td>

                                    <td>
                                        <input
                                            type="text"
                                            name="username"
                                            className="form-control"
                                            value={currentUser.username}
                                            onChange={(e) => handleChange(e,user)}
                                        />
                                    </td>

                                    <td>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={currentUser.email}
                                            onChange={(e) => handleChange(e,user)}
                                        />
                                    </td>

                                    <td>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-control"
                                            value={currentUser.phone}
                                            onChange={(e) => handleChange(e,user)}
                                        />
                                    </td>

                                    <td>
                                        <button
                                            className="btn btn-success btn-sm"
                                            onClick={() => handleSave(user.id)}
                                        >
                                            Save
                                        </button>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <button
                    className="btn btn-secondary"
                    onClick={() => setEdit(false)}
                >
                    Cancel
                </button>

            </div>
        </>
    )
}