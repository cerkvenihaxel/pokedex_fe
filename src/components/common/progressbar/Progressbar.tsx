import React, { useState, useEffect } from 'react';
import {useRouter} from "next/navigation";

const LoadingBar = () => {
    const [progress, setProgress] = useState(0);
    const history = useRouter();
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(timer);
                    history.push('/home');
                    return 100;
                } else {
                    return prevProgress + 1;
                }
            });
        }, 30);

        return () => {
            clearInterval(timer);
        };
    }, [history]);

    return (
        <div>
            {progress == 100 ? <h1>{`Gotta Catch 'em all`}</h1> : <p>Loading... {progress}% </p>}
            <div style={{ width: `${progress * 3}%`, height: '20px', backgroundColor: 'green' }} />
        </div>
    );
};

export default LoadingBar;