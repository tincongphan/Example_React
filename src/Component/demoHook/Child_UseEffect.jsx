import React, {useEffect, useState} from 'react'

export default function Child_UseEffect() {

    const [input, setInput] = useState(0)
    useEffect(() => {
        return () => {
            console.log('child UseEffect');
        }
    }, [input])

    return (
        <div>
            <p>This is a Child UseEffect</p>
        </div>
    )
}
