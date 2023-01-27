import { useState } from "react";
function Myform(){
    const [name, setName] = useState('Wabomba');
    const [age, setAge] = useState(0);
    return (
        <>
        <input 
        value={name}
        onChange={e => setName(e.target.value)}
        />
        <button onClick={() => setAge(age + 1)}>
            Increment Age
        </button>
        <button onClick={() => setAge(age - 1)}>
            decrement Age
        </button>
        <p>hello {name}, your age is {age}</p>
        </>
    );

}
export default Myform