import React, {Component} from "react";
import Greet from "./Greer";
import Welcome from "./Welcome";
import ProfileName from "./Profile";
import Message from "./Message";
import Counter from "./Counter";
import Resume from "./Resume";
import Display from "./Destruct";
import Counta from "./Counta";
import Myinput from "./Textfield";
import Checker from "./Checkbox";
import Myform from "./form";
class App extends Component{
render (){
    return (
      <div className='App'>
        <Greet />
        <Welcome />
        <ProfileName name='cp' lastName='orlyne'/>
        <Message newMessage='i get a ui/ ux designer job'/>
        <Counter />
        {/*passing props to the component */}
        <Resume firstName='Charlespaul' lastName='wabomba'/>

        {/*passing props to the component */}
        <Display firstName='Don' lastName='Corleone'/>
        <Counta />
        <Myinput />
        <Checker />
        <Myform />

    
      </div>
    );

}
}
export default App;
