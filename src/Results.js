import React, { useState, useEffect } from "react";

const Results = ({ randomResults }) => {
    const [notificationShown, setNotificationShown] = useState(false);

    useEffect(() => {
        if (randomResults.length === 0 && notificationShown) {
            setNotificationShown(true);
            alert("No results found. Please try again.");
        }
    }, [randomResults]);

    return (
        <>
            <h2>5.</h2>
            {randomResults.map((result) => (
                <div className="result" key={result.name}>
                    <h2>{result.name}</h2>
                    <h3>{result.muscle}</h3>
                    <h3>{result.type}</h3>
                    <h3>{result.difficulty}</h3>
                    <p>{result.instructions}</p>
                </div>
            ))}
        </>
    );
};

export default Results;