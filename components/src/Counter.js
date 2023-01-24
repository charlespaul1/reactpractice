import React, {Component} from "react";

class Counter extends Component {
    constructor(){
        super();
        /*creating a state object*/
        this.state={
            counter:0,
        }
    };
    increment(){
        this.setState({
            counter: this.state.counter + 1,
        })
    }
    decrement(){
        this.setState({
            counter: this.state.counter - 1,
        })
    }
    render (){
        return (<div>
            {/*accessing the state*/}
            <h2>the count value is: {this.state.counter} </h2>
            {/* modifying our value using on event*/}
            <button onClick={() => this.increment()}>increment</button>
            <button onClick={() => this.decrement()}>Decrement</button>
        </div>)
    }
}
export default Counter