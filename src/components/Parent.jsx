import React from "react";

function Parent(props) {
    return (
        <>
            <h2>Parent</h2>
            {props.children}
        </>
    );
}

export default Parent;
