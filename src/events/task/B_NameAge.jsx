import { useState } from "react";
export default function B_NameAge(){

    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [show,setShow] = useState(false);


    return(
        <>
            <div className = "container m-3">
                <form onSubmit = {(e) => {
                    e.preventDefault();
                    setShow(true);
                }}
                >
                    <div className = "fs-3 text-center">Task-2</div>
                    <div>
                        <label className = "form-label mt-2">Name: </label>
                        <input type = "text" name = "name" className = "form-control" onChange={(e) => {
                            setName(e.target.value);
                            setShow(false);
                        }}
                        required
                        />
                    </div>

                    <div>
                        <label className = "form-label mt-2">Age: </label>
                        <input type="text" name="age" className="form-control" onChange={(e) => {
                            setAge(e.target.value);
                            setShow(false);
                        }}
                        required
                        />
                    </div>

                    <div>
                        <button type="submit" className="btn btn-primary mt-4">Submit</button>
                    </div>
                </form>

                {show && (
                    <div className = "mt-4">
                        <h1>Welcome {name} !!!</h1>
                        <h1>Age is {age}</h1>
                    </div>
                )}
            </div>
        </>
    )
}