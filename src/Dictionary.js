import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response){
        console.log(response.data);
        setResults(response.data);

    }
    function search(event){
        event.preventDefault();
        let apiKey = "3c0eca18f3a2743b8tdo8c93b0a6483f";
        let apiUrl =`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }


    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }


    return <div className="Dictionary">
        <section>
        <form onSubmit={search}>
        <label>What word do you want to look up?</label>
            <input type="search" onChange={handleKeywordChange} className="form-control search-input"/>
        </form>
        <small className="hint">i.e. paris, wine, yoga, coding</small>
        </section>
        <Results results={results}/>
    </div>;
}