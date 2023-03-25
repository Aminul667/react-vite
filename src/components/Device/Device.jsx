import React from 'react';

const Device = (props) => {
    return (
        <div>
            <h1>I have a Device: {props.name} and {props.price}</h1>
        </div>
    );
};

export default Device;