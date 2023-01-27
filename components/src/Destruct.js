//destructuring props in a class based component
import { Component } from "react";

class Display extends Component {
    render (){
         /*extracting the prop and destructuring it */
         const {firstName, lastName} = this.props;
        return <h1>name: {firstName} {lastName}</h1>
    }
}
export default Display