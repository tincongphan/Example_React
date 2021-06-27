import React, { useEffect, useState } from 'react'
import Child_UseEffect from './Child_UseEffect'

export default function Hook_UseEffect() {

    const [count, setCount] = useState(0)

    /* TH1: 
        useEffect(() => {
        console.log('componentDidmount');
        console.log('componentDidupdate');

        Nếu không có tham số thứ 2 thì useEffect sẽ chạy thay thế cho 
        2 component : componentDidmount và componentDidUpdate
    })
    */

    /*  TH2: Cách viết thay thế componentDidmount
        useEffect(() => {
            console.log('componentDidmount');
        }, [])
        Tham số thứ 2 để rỗng
    */

    /* TH3: Cách viết thay thế componentDidupdate
       useEffect(() => {
        console.log('componentDidUpdate');
       }, [count])
       Sau khi setState nếu tham số thứ 2 thay đổi sẽ chạy lại useEffect này
    */

    /* TH4: Thay thế cho componentWillUnmount
       
    */


    const upCount = () => {
        setCount(count + 1)
    }
    return (
        <div className='container m-5'>
            {count}
            <p>This is a Hook UseEffect</p>
            <button className='btn btn-success' onClick={upCount}>Up Count</button>

             {count === 1 ? <Child_UseEffect /> : ""}   
        </div>
    )
}
