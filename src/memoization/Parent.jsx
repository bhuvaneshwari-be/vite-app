import { useState } from "react";
import Child from "../memoization/Child"

export default function Parent(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Count: {count}</p>

            <button onClick={() => setCount(count+1)}>Add Count</button>

            <br></br>

            <Child name="Bhuvaneshwari" />
        </div>
    )
}