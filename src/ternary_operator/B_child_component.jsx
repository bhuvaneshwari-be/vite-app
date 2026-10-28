import { useState } from "react";

export default function B_child_component({
    weatherDetails : {
        city,
        temperature
    }
}){

    return(
        <>
            <div className="mt-3 ms-3">
                <span className="fs-3">City: </span>
                <span>{city}</span>
            </div>

            <div className="mt-3 ms-3">
                <span className="fs-3">Temperature: </span>
                <span>{temperature}°C</span>
            </div>

            <div className="mt-3 ms-3">
                <span className="fs-3">Weather Status: </span>
                <span>{temperature > 30 ? "Hot Weather" : "Normal Weather"}</span>
            </div>
        </>
    )
}