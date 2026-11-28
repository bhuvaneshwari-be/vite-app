import { useState, useCallback } from "react";

export default function UseCallback() {
    const [count, setCount] = useState(0);

    const showMessage = useCallback(() =>{
        alert("Button Clicked")
    }, []);

    return(
        <div>
            <h3>UseCallback Example</h3>

            <h4>Count: {count}</h4>

            <button onClick={() => setCount(count + 1)}>Increase</button>

            <button onClick={showMessage}>ShowMessage</button>
        </div>
    )
}