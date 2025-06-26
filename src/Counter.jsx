import { useState } from "react";



export default function Counter() {

    let [count, setCount] = useState(0);

    let incrCount = () => {
        
        count = count + 1;
        setCount(count);
        console.log(count);
        
        
    }

    let reset = () =>{
        setCount(0);
    }
    return (
        <>
            <h4>Count = {count}</h4>
            <button onClick={incrCount}>Increase Count</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}