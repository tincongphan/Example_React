import React, { Component, PureComponent } from 'react'

export default class Profile extends PureComponent {

    /**
     * không nên lạm dụng PureComponent, nó so sánh kiểu dữ liêu nguyên thủy
     * khi props truyền vào là 1 object hoặc array, nó sẽ không biết có sư thay
     * đổi bên trong. Nếu thât sư muốn dùng nó thì dùng deepClone   
     */
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className=" ">
                <img
                    className="card-img-top"
                    src="https://1.bp.blogspot.com/-a-GO0cVmnuE/XcWkLlMcWrI/AAAAAAAATMY/3QfOrHzXeYoRS7qMAzVCa8BrHAwnmCncQCLcBGAsYHQ/s1600/hinh-anh-hot-girl-xinh-han-quoc-wap102-com%2B%25281%2529.jpg"
                    alt="hinhanh"
                    style={{ width: '200px', height: "300px" }}
                />
                
                <div className="card-body">
                    <h4 className="card-title">Số lượng thả tim {this.props.thatim.soLuong}</h4>
                </div>
            </div>
        )
    }
}
