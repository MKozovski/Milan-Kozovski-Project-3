const Results = ({ randomResult }) => {
    if (!randomResult) {
        return <p>No result available</p>;
    }
    return (
        <>
            <h2>{randomResult.name}</h2>
            <h3>{randomResult.muscle}</h3>
            <h3>{randomResult.type}</h3>
            <h3>{randomResult.difficulty}</h3>
            <p>{randomResult.instructions}</p>
        </>
    )
}

export default Results;