import { useState } from "react";
function Myinput (){
    const [text, setText] = useState('Hello!!');
    function handleClick(e){
        setText(e.target.value);
    }
    return (
        <>
        <input value={text} onChange={handleClick} />
        <p>you typed {text}</p>
        <button onClick={()=> setText('Hello!!')}>Reset</button>
        </>
    )
}
export default Myinput