import { useState, useLayoutEffect, useRef } from "react";

export default function UseLayoutEffect(){
    const [width, setWidth] = useState(0);
    const boxRef = useRef();

    useLayoutEffect(() => {
        const boxWidth = boxRef.current.getBoundingClientRect().width;
        setWidth(boxWidth);
    },[])

    return(
        <>
            <h2 className="text-center">UseLayoutEffect Example</h2>
           <div>
                <div ref={boxRef} style={{ height:"150px", backgroundColor: "skyblue"}}>Calculate My Width: </div>
                <h3>Div Width: {width}</h3>
            </div> 
        </>
    )
}