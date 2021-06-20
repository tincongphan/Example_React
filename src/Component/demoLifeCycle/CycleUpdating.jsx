import React, { Component } from 'react'

export default class CycleUpdating extends Component {

    constructor(props){
        super(props)
        this.state = {
            number: 0
        }
    }

    static getDerivedStateFromProps(newProps,newState){
        console.log('getDerivedStateFromProps');
        return null;

    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }
    handleClick = () => {
        const newNumber = this.state.number + 1;
        this.setState({
            number: newNumber
        })
    }

    render() {
        console.log('render');
        return (
            <div>
                <button onClick={() => {
                   this.handleClick()
                }}>Click me</button>
            </div>
        )
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
}
