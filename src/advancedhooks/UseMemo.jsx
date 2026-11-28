import { useState, useMemo } from "react";

export default function UseMemo(){
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const square =  useMemo(() => {
        return number * number;
    },[number]);

    return(
        <div>
            <h3>UseMemo Example</h3>

            <input type="number" placeholder="Enter a number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />

            <h4>Square: {square}</h4>

            <button onClick={() => setCount(count+1)}>
                Click {count}
            </button>
        </div>
    )
}