import {useState, useEffect} from "react";

export default function CounterUseEffect(){
    const [count,setCount] = useState(0);

    useEffect(()=> {
        console.log("Counter Changed: ",count)
    }, [count])

    return(
        <>
            <h1 className="text-center">Counter with useEffect</h1>

            <h2 className="text-center mt-3">{count}</h2>

            <div className="text-center">
                <button className="btn-center btn btn-primary mt-3" onClick={() => setCount(count + 1)}>Increase</button>
            </div>
        </>
    )
}