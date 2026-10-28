import { useState } from "react";
import B_childComponent from "../ternary_operator/B_child_component";

export default function A_parent_component(){

    const [weatherDetails, setWeatherDetails] = useState({
        city: "Chennai",
        temperature: 35
    })

    return(
        <>
            <div className="mt-3 h3 text-primary text-center">Temperature Details</div>

            <B_childComponent
            weatherDetails={weatherDetails}
            />

        </>
    )
}