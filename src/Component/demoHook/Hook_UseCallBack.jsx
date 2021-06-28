import React, { useState, useCallback } from 'react'
import Child_UseCallBack from './Child_UseCallBack'

export default function Hook_UseCallBack() {
    const [number, setNumber] = useState(0)
    let upCount = () => {
        return "child component"
    }

    const handleChange = () => {
        setNumber(number + 1)
    }
    let render_UseCallBack = useCallback(upCount, [])
    /*
    useCallBack recive 2 parameters, first para is function,
    seccond para is dependency. It can empty or not. Should combine memo with usecallback 
     */
    return (
        <div className='m-5'>
            <p>This is a Hook UseCallBack  {number} </p>
            <Child_UseCallBack notify={render_UseCallBack} />
            <button className='btn btn-success' onClick={handleChange}>Click Me</button>
        </div>
    )
}

