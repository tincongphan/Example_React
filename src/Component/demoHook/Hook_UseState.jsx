import React, { useState } from 'react'

export default function Hook_UseState(props) {
    
    const [count, setCount] = useState({number: 0})
    const upCount = () => {
        setCount({
            number: count.number + 1
        })
    }

    return (
        <div className ='container mt-5'>
            <p>This is a Hook UseState : {count.number} </p>
            <button className ='btn btn-success' onClick = {upCount}>Set State</button>
        </div>
    )
}
