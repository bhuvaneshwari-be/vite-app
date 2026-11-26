import { useState } from "react";

export default function ControlledForms() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        phone: "",
        password: ""
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        alert("We have received your data! Thank you for submitting the form.")
        console.log(formData)
    }

    return(
        <>
        <div>
            <h1 className="text-center">Controlled Forms</h1>
        </div>
            <form onSubmit= {handleSubmit} className = {"form-control"}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={"form-control my-2"}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={"form-control my-2"}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                    className={"form-control my-2"}
                />
                <input
                    type="phone"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={"form-control my-2"}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className={"form-control my-2"}
                />

                <button type="submit" className={"btn btn-primary my-2"}>Submit</button> 
            </form>
        </>
    )
}