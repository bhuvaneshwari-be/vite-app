import { useState } from "react";

export default function A_SimpleCalculator(){

    const [count, setCount] = useState(0);

    return(
        <>
            <div>
                <div className = {"h1"}>Simple Calculator</div>
            </div>

            <div className = {"mt-3"}>
                <div className = {"fs-1"}>Count: {count}</div>
            </div>

            <div className="btn-group">
                <button onClick = { () => setCount(count+1)}>ADD</button>
                <button onClick = { () => setCount(count-1)}>SUB</button>
                <button onClick = { () => setCount(count*2)}>MULTIPLY</button>
                <button onClick = { () => setCount(count/2)}>DIV</button>
                <button onClick = { () => setCount(0)}>RESET</button>
            </div>
        </>
    )
}