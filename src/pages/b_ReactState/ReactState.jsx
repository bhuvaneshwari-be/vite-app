import { useState } from "react";

export default function ReactState(){
    const [name,setName] = useState("Bhuvaneshwari")
    const [age,setAge] = useState(22)

    return (
        <>
            <div>
                <div>
                    <span className = {"h3"}>I am {name}</span>
                </div>
                <div>
                    <span className = {"h3"}>My age is {age}</span>
                </div>
            </div>
        </>
    )
}