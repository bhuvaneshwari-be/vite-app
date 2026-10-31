import DeleteUserDetails from "./DeleteUserDetails";

export default function UserDetails({
    users,
    setUsers,
    setEdit
}){

    return(
        <div className="mt-3">
            <table className="table table-bordered text-center">

                <thead className="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>

                            <td>
                                {user.name.firstname.charAt(0).toUpperCase() + user.name.firstname.slice(1)}{" "}
                                {user.name.lastname.charAt(0).toUpperCase() + user.name.lastname.slice(1)}
                            </td>

                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>

                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => setEdit(true)}
                                >
                                    Edit
                                </button>

                                <DeleteUserDetails
                                    users={users}
                                    setUsers={setUsers}
                                    userId={user.id}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}