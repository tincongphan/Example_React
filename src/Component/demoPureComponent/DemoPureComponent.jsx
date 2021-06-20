import React, { Component } from 'react'
import Profile from "./Profile"


export default class DemoPureComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            like: {       // like là object không phải kiểu dữ liệu nguyên thủy
                soLuong: 0
            }
        }
    }
    
    handleThaTim = () => {
        const newLike = this.state.like;
        newLike.soLuong += 1;
        this.setState({like : newLike})

        //  nếu thât sư muốn dùng PureComponent cho props là array hay object thì dùng cách sau
        // this.setState({like : {...newLike}})
    }

    render() {
        return (
            <div className='container mt-4'>
                <Profile thatim={this.state.like} />
                <div>
                    <p>{this.state.like.soLuong}</p>
                    <button className='btn btn-primary' onClick={this.handleThaTim}>Thả tim</button>
                </div>
            </div>
        )
    }
}
