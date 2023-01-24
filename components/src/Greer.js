import React from "react";

const displayMessage = () => {
    return 'i am a good front-end developer'
};
function  Greet(){
    return <h1> the message is: {displayMessage()}</h1>
};
export default Greet