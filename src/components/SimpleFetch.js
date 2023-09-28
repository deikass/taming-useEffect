import React, {useState} from "react";
import useFetchSimple from "../useFetchSimple";

const URL = 'https://v2.jokeapi.dev/joke/Any';

function SimpleFetch()  {
    const [url, setUrl] = useState(null);
    const { data: joke, loading, error, reFetch } = useFetchSimple(URL);

    if (loading) return <h1> LOADING...</h1>;

    if (error) console.log(error)

    return (
        <div>
            <h1>{joke?.setup} : {joke?.delivery}</h1>
            <button onClick={reFetch}>Refetch</button>
        </div>
    )
}

export default SimpleFetch;
