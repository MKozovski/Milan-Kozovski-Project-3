const Results = ({ randomResults }) => {

// explanation
    const uniqueResults = Array.from(new Set(randomResults.map(result => result.name))).map(name => {
        return randomResults.find(result => result.name === name);
    });

    return (
        <>
            <h2>5.</h2>
            {uniqueResults.map((result) => (
                <div className="result">
                    <div key={result.name}>
                        <h2>{result.name}</h2>
                        <h3>{result.muscle}</h3>
                        <h3>{result.type}</h3>
                        <h3>{result.difficulty}</h3>
                        <p>{result.instructions}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Results;