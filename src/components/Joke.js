import React, { useState, useEffect } from 'react'
import axios from "axios";
function Joke() {

    const [joke, setJoke] = useState('');

    const [jokenumber, setJokeNumber] = useState(-1);

    useEffect(()=>{
        nextJoke();
    },[]);

    useEffect(()=>{
        let no = jokenumber;
        no++;
        setJokeNumber(no);
    },[joke]);

    const nextJoke = () => {
        axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } })
            .then(res => {
                setJoke(res.data.joke);
            })
            .catch();
    }
    return (
        <div>
            <main role="main" className="container">
                <div className="jumbotron">
                    <h1>Dad Joke No: {jokenumber}</h1>
                    <p className="lead">{joke}</p>
                    <a className="btn btn-lg btn-primary text-white" role="button" onClick={nextJoke}>Next joke</a>
                </div>
            </main>
        </div>
    )
}

export default Joke
