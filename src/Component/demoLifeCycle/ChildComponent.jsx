import React, { Component } from 'react'

export default class ChildComponent extends Component {
    render() {
        console.log('childcomponent');
        return (
            <div>
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src="holder.js/100px180/" alt='hinhanh' />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>

            </div>
        )
    }
    // componentWillUnmount chỉ chạy sau khi component đó biến mất khỏi giao diện
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}
