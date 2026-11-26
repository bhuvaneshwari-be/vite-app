import {useRef} from "react";

export default function UncontrolledForms() {
    const nameRef = useRef()
    const emailRef = useRef()
    const ageRef = useRef()
    const phoneRef = useRef()
    const passwordRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        alert("We have received your data! Thank you for submitting the form.")
        console.log({
            name: nameRef.current.value,
            email: emailRef.current.value,
            age: ageRef.current.value,
            phone: phoneRef.current.value,
            password: passwordRef.current.value
        })
    }

    return(
        <>
        <div>
            <h1 className="text-center">Uncontrolled Forms</h1>
        </div>

        <div>
            <form onSubmit={handleSubmit} className={"form-control"}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    ref={nameRef}
                    className="form-control my-2"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    ref={emailRef}
                    className="form-control my-2"
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    ref={ageRef}
                    className="form-control my-2"
                />
                <input
                    type="phone"
                    name="phone"
                    placeholder="Phone"
                    ref={phoneRef}
                    className="form-control my-2"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref={passwordRef}
                    className="form-control my-2"
                />

                <button type="submit" className="btn btn-primary my-2">Submit</button>
            </form>
        </div>
        </>
    )
}