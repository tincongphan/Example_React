import React, { useState } from 'react'
import ChildReactMemo from './ChildReactMemo'

export default function React_memo() {
     
    const [number, setNumber] = useState(0)

    const handleChange = () => {
        setNumber(number + 1)
    }

    return (
        <div className='m-5'>
            <p>This is a React.memo</p>
            <ChildReactMemo like = {number}/>
            <button className='btn btn-success'  onClick = {handleChange}> handleChange </button>
        </div>
    )
}
