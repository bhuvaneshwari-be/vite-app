import { useState } from "react";

export default function Expressions(){
    const [productAvailable,setProductAvailable] = useState(true)

    return (
        <>
            <div className = {productAvailable ? 
                (
                    <div>
                        <div>Apple</div>
                        <div>Rs.120</div>
                    </div>
                ) : (
                    <div>
                        <div>No Product Available</div>
                    </div>
                )
            }></div>
        </>
    )
}