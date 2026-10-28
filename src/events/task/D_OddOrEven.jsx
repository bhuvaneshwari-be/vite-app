import { useState } from "react";

export default function D_OddOrEven(){
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    return(
        <>
            <div className="container-fluid mt-3 text-enter">
                <h3 className="text-center">Odd or Even</h3>
            </div>
        </>
    )
}