import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border:'2px solid blue', margin:'20px', padding:'20px'}}>
            <h3>This is Dial components</h3>
            <p>Dial: {props.steps}</p>
        </div>
    );
};

export default Dial;