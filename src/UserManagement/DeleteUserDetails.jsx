export default function DeleteUserDetails({
    users,
    setUsers,
    userId
}){
    const deleteUser = () => {
        const updatedUsers = users.filter(user => user.id !== userId);
        setUsers(updatedUsers);
    }

    return(
        <button className="btn btn-danger btn-sm" onClick={deleteUser}>
            Delete
        </button>
    )
}