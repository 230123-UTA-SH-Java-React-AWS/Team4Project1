import React from "react";

type Prop = {
    
};

type State = {
    counter:number
}

class ClassComponent extends React.Component<Prop, State> {

    //Execute before anything else (similar to java)
    constructor(prop:any) {
        console.log("Component constructor executed");
        super(prop);

        this.state = {
            counter:0
        }
    }

    //Will Execute next after the constructor
    render() {
        return <div>
            This is a class component {this.state.counter}
            <button onClick={this.increment.bind(this)}>+</button>
            </div>
    }

    increment() {
        this.setState({
            counter:this.state.counter + 1
        })
    }

    //Will execute after render() just once
    componentDidMount() {
        console.log("Component mounted");
    }

    //Will execute after a state change in the component
    componentDidUpdate() {
        console.log("Component was updated");
    }

    //Will execute after the component dies/not rendering in the website
    componentWillUnmount () {
        console.log("Component was unmounted")
    }
}

export default ClassComponent;