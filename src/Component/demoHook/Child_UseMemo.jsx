import React, { memo } from 'react'

function Child_UseMemo(props) {
    console.log('re-render child usememo');
    return (
        <div>
            <p>This is a Child hook useMemo</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.childUsememo.map((item, index) => {
                        return <tr key={index}>
                            <th>{item.name}</th>
                            <th>{item.price}</th>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default memo(Child_UseMemo)
