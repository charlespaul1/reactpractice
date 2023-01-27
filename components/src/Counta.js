import { useState } from "react";

function Counta(){
    const [count, setCount] = useState(0);
    function handleClick(){
        setCount(count + 1)
    }
    return(<button onClick={handleClick}>You pressed me {count} times NIGGA!</button>);
};

export default Counta