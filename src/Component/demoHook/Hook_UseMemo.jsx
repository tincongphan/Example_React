import React, { useState, useMemo } from 'react'
import Child_UseMemo from './Child_UseMemo'

export default function Hook_UseMemo() {
    const [number, setNumber] = useState(0)
    const cart = [
        {id: 1, name: "iphone", price: 1000},
        {id: 2, name: "samsung", price: 2000},
        {id: 3, name: "note 10", price: 3000}
    ]
    const render_useMemo = useMemo(() => cart, [])
    // const render_useMemo = useMemo(() => cart, [number])
    const handleChange = () => {
        setNumber(number + 1)
    }
    return (
        <div className = "m-5">
            <p>This is a Hook useMemo {number}</p>
            <Child_UseMemo childUsememo = {render_useMemo}/>
            <button className = 'btn btn-success' onClick = {handleChange}>Click Me</button>
        </div>
    )
}

/* Compare useMemo and useCallback
===> Commond
-    Both of them use in function component
-    Use technicall memoization
-    Recive 2 parameters are function and dependencies
-    Limited re-render not nesessary

 ===> Different
-    useCallback return memoize callback
-    useMemo return momoize value
 */