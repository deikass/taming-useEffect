import React, { useState } from "react";
import { useFetch } from "../useFetch";

function MasterFetch() {
    const [url, setUrl] = useState(null);
    const { data } = useFetch({ url, onsuccess: () => console.log('success') });

    console.log('Component rendering');
    console.log('data', data);

    return (
        <div>
            <div>Hello</div>
            <div>{JSON.stringify(data)}</div>
            <div>
                <button onClick={() => setUrl("/jack.json")}>Jack</button>
                <button onClick={() => setUrl("/sally.json")}>Sally</button>
            </div>
        </div>
    );
}

export default MasterFetch;

