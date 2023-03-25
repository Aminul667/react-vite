import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const nextSteps = steps + 1;
        setSteps(nextSteps);
    }

    useEffect(() => {
        console.log(steps)
    }, [steps])

    return (
        <div style={{border:'2px solid red', margin:'20px', padding:'20px'}}>
            <h1>This is my smart watch!!</h1>
            <p>Increased steps: {steps}</p>
            <button onClick={increaseSteps}>Steps</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;