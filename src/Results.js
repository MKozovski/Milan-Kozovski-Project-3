const Results = ({ randomResults }) => {
    if (!randomResults) {
        return <p>No results available</p>;
    }
// explanation
    const uniqueResults = Array.from(new Set(randomResults.map(result => result.name))).map(name => {
        return randomResults.find(result => result.name === name);
    });

    return (
        <>
            {uniqueResults.map((result, index) => (
                <div key={index}>
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