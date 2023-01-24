import React, {Component} from "react";
import Greet from "./Greer";
import Welcome from "./Welcome";
import ProfileName from "./Profile";
import Message from "./Message";

class App extends Component{
render (){
    return (
      <div className='App'>
        <Greet />
        <Welcome />
        <ProfileName name='cp' lastName='orlyne'/>
        <Message newMessage='i get a ui/ ux designer job'/>
    
      </div>
    );

}
}
export default App;
