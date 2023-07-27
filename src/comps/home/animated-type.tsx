import React from 'react';
import Typewriter from 'typewriter-effect';

function AnimatedType() {
    const strings = ['in Asia.', 'in Europe.', 'in The World.'];
    return (
        <Typewriter
            options={{
                autoStart: true,
                loop: true,
            }}
            onInit={(typewriter) => {
                typewriter
                    .typeString(strings[0])
                    .pauseFor(1000)
                    .deleteAll()
                    .pauseFor(1000)
                    .typeString(strings[1])
                    .pauseFor(1000)
                    .deleteAll()
                    .pauseFor(1000)
                    .typeString(strings[2])
                    .pauseFor(1000)
                    .deleteAll()
                    .pauseFor(1000)
                    .start();
            }}
        />
    );
}

export default AnimatedType;
