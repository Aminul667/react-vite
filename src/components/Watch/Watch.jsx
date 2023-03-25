import React, { useEffect, useState } from 'react';

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
        <div>
            <h1>This is my smart watch!!</h1>
            <p>Increased steps: {steps}</p>
            <button onClick={increaseSteps}>Steps</button>
        </div>
    );
};

export default Watch;