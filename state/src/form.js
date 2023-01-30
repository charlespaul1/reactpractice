import { useState } from "react";
//declaring more than one variable in a component
export default function Form(){
    /*declaring state variables firstName, lastName and age*/
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    /*updater function */
    function increment(){
        setAge(a => a + 5)
    }
    function decrement(){
        setAge(a => a - 5)
    }
    function incrementOne(){
        setAge(a => a + 1)
    }
    return(
        <>
        <h1>adding state variables to  a component </h1>
        <input 
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        />
        <input 
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        />
        <input 
        value={age}
        />
        <button onClick={() => {setAge(age + 1)}}>Increment Age</button>
        <p>Hello {firstName} {lastName} your age is{age}</p>
        {/*passing an  updater function increment or decrement*/}
        <button 
        onClick={() => {
            increment();
        }}>increment by 5</button>;
        
        <button onClick={
            () => {decrement();}
        }
        >decrement by 5</button>
        <button
        onClick={
            () => {incrementOne();}
        }
        >increase by one</button>
        </>

    )
}
