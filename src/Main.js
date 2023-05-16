import { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import myImage from './workout.svg'
import './App.css';
import Header from "./Header";

// TO DO: Finish styling, error handling on no show result 


const Main = () => {
    
    const apiUrl = new URL('https://api.api-ninjas.com/v1/exercises?&');
    const [muscle, setMuscle] = useState('');
    const [type, setType] = useState('');
    const [difficulty, setDifficulty] = useState('');
    
    const [combinedResults, setCombinedResults] = useState([]);
    const [randomResults, setRandomResults] = useState([]);
    
    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value)};

    useEffect(() => {
        if (combinedResults.length > 0) {
            const randomSelect = Math.floor(Math.random() * combinedResults.length);
            const newResults = combinedResults[randomSelect];
            setRandomResults(prevResults => [...prevResults, newResults]);
        }
    }, [combinedResults]);

    const handleSubmit = () => {
        if (muscle && difficulty && type) {
            const url = `${apiUrl}${muscle}&difficulty=${difficulty}&${type}`;
            const urlWithOffset = `${apiUrl}offset=1&${muscle}&difficulty=${difficulty}&${type}`;
            const urlWithOffsetTwo = `${apiUrl}offset=2&${muscle}&difficulty=${difficulty}&${type}`;

            const requestOne = axios.get(url, {
                headers: { 'X-Api-Key': 'z0I1OlumYdr0dG6YF/kRIQ==zbWilQS4KRKzSB3D' },
            });
            const requestTwo = axios.get(urlWithOffset, {
                headers: { 'X-Api-Key': 'z0I1OlumYdr0dG6YF/kRIQ==zbWilQS4KRKzSB3D' },
            });
            const requestThree = axios.get(urlWithOffsetTwo, {
                headers: { 'X-Api-Key': 'z0I1OlumYdr0dG6YF/kRIQ==zbWilQS4KRKzSB3D' },
            });

            Promise.all([requestOne, requestTwo, requestThree])
                .then((responses) => {
                    const apiResponse = responses[0].data;
                    const apiResponseOffset = responses[1].data;
                    const apiResponseOffsetTwo = responses[2].data;
                    const combinedResponse = [
                        ...apiResponse,
                        ...apiResponseOffset,
                        ...apiResponseOffsetTwo,
                    ];
                    setCombinedResults(combinedResponse);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const handleClear = () => {
        setCombinedResults([]);
        setRandomResults([]);
    };

    return (

        <>
        <div className="wrapper">
            <Header/>
            <div className="main">
                <div className="image">
                    <img src={myImage} alt="cartoon person working out" />
                </div>

                <div className="options">
                {/* muscles */}
                <h2>1.</h2>
                    <label htmlFor="Muscles">Choose a muscle group: </label>
                    <select name="muscles" id="Muscles" onChange={(event) => setMuscle(event.target.value)}>
                        <option value="">Please Choose</option>
                        <option value="muscle=abdominals">Abdominals</option>
                        <option value="muscle=abductors">Abductors</option>
                        <option value="muscle=biceps">Biceps</option>
                        <option value="muscle=chest">Chest</option>
                        <option value="muscle=forearms">Forearms</option>
                        <option value="muscle=glutes">Glutes</option>
                        <option value="muscle=hamstrings">Hamstrings</option>
                        <option value="muscle=lats">Lats</option>
                        <option value="muscle=lower_back">Lower Back</option>
                        <option value="muscle=middle_back">Middle Back</option>
                        <option value="muscle=neck">Neck</option>
                        <option value="muscle=quadriceps">Quadriceps</option>
                        <option value="muscle=traps">Traps</option>
                        <option value="muscle=triceps">Triceps</option>
                    </select>
                <h2>2.</h2>
                {/* type */}
                    <label htmlFor="type">Select type of workout</label>
                    <select name="type" id="Type" onChange={(event) => setType(event.target.value)}>
                        <option value="">Please Choose</option>
                        <option value="type=cardio">Cardio</option>
                        <option value="type=plyometrics">Plyometrics</option>
                        <option value="type=powerlifting">Powerlifting</option>
                        <option value="type=strength">Strength</option>
                        <option value="type=stretching">Stretching</option>
                    </select>
                <h2>3.</h2>

                {/* difficulty */}
                <label htmlFor="beginner">Beginner</label>
                    <input 
                        type="radio"
                        id="beginner"
                        name="difficulty"
                        value="beginner"
                        checked={difficulty === "beginner"}
                        onChange={handleDifficultyChange}
                    />

                <label htmlFor="intermediate">Intermediate</label>
                    <input
                        type="radio"
                        id="intermediate"
                        name="difficulty"
                        value="intermediate"
                        checked={difficulty === "intermediate"}
                        onChange={handleDifficultyChange}
                    />

                <label htmlFor="expert">Expert</label>
                    <input
                        type="radio"
                        id="expert"
                        name="difficulty"
                        value="expert"
                        checked={difficulty === "expert"}
                        onChange={handleDifficultyChange}
                    />
                    <h2>4.</h2>
                    <button onClick={handleSubmit} disabled={!muscle || !difficulty || !type}>
                    Click for workout!
                    </button>

                    <button onClick={handleClear}>Clear</button>
            </div>
        </div>
        <div className="results">
            <Results randomResults={randomResults}/>
        </div>
    </div>
        </>
)
}


export default Main;