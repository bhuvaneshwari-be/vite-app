import { useState } from "react";
export default function A_DateTime(){
    const [dateTime, setDateTime] = useState("");

    const showDate = () => {
        setDateTime(new Date().toLocaleString());
    }

    return(
        <>
            <div>
                <h4 className="mt-3 text-center">Show Date & Time</h4>
            </div>
            <div>
                <button className = "btn btn-primary mt-4 ms-4 btn-center" onClick={(showDate)}>Date & Time</button>
            </div>

            <div>
                <h3 className = "ms-4 mt-4">{dateTime}</h3>
            </div>
        </>
    )
}