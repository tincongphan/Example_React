import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class CycleMounting extends Component {

    constructor(props){
        super(props)
        console.log('contructor');
        this.state = {
            number: 1
        }
    }

    static getDerivedStateFromProps(newProps,newState){
        console.log('getDerivedStateFromProps');
        return true
    }

    render() {
        return (
            <div>
                <ChildComponent/>            
            </div>
        )
    }
    componentDidMount(){
        console.log('componentDidmount');
    }
}
