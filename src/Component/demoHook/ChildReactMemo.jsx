import React, { memo } from 'react'

function ChildReactMemo(props) {
    console.log('re-render');
    return (
        <div>
            <p>This is a childReact_memo</p>
            <p>Like {props.like} </p>
        </div>
    )
}

export default memo(ChildReactMemo)

/*

React.memo is not a react hook, it's HOC. It's similar PureComponent. 
It's only re-render when props change
By default it will only shallowly compare

*/
