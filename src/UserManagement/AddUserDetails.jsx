import { useState } from "react";

export default function AddUserDetails({
    addUser
})
{
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        phone: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name] : e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: {
                firstname: formData.firstname,
                lastname: formData.lastname
            },
            username: formData.username,
            email: formData.email,
            phone: formData.phone
        }

        addUser(newUser);

        setFormData({
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            phone: ""
        });
    }
    return(
        <>
            <div className="container mt-3">
                <form onSubmit={handleSubmit} className="border rounded p-3">
                    <h4 className="text-secondary mt-1">Add New User</h4>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <input type="text" name="firstname" placeholder="First Name" value={formData.firstname} className="form-control" onChange={handleChange} required/>
                        </div>

                        <div className="col-md-4 mb-3">
                            <input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} className="form-control" onChange={handleChange} required/>
                        </div>

                        <div className="col-md-4 mb-3">
                            <input type="text" name="username" placeholder="User Name" value={formData.username} className="form-control" onChange={handleChange} required/>
                        </div>

                        <div className="col-md-4 mb-3">
                            <input type="email" name="email" placeholder="Email" value={formData.email} className="form-control" onChange={handleChange} required/>
                        </div>

                        <div className="col-md-4 mb-3">
                            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} className="form-control" onChange={handleChange} required/>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Add User</button>
                </form>
            </div>
        </>
    )
}