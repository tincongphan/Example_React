import React, { useEffect, useRef, useState } from 'react'

export default function Hook_UseRef_() {
    const [count, setCount] = useState(0)
    const prevCount = useRef(count)
    useEffect(() => {
        prevCount.current = count
    },[count])

    const handleIncrease = () => {
        setCount(count + 1)
    }
    return (
        <div className = 'm-5'>
            <p>Previous: {prevCount.current}</p>
            <p>Current: {count}</p>

            <div>
                <button className = 'btn btn-success' onClick = {handleIncrease}>Click Me</button>
            </div>
        </div>
    )
}

// useRef save previous value after re-render through property current.