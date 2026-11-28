import React from "react";

const Child = ({name}) => {
    return(
        <div>
            <h6>Welcome {name}</h6>
        </div>
    );
};

export default React.memo(Child);