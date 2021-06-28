import React, { memo } from 'react'

function Child_UseCallBack(props) {
    console.log(props.notify());
    return (
        <div>
            This is a Child UseCallBack
        </div>
    )
}

export default memo(Child_UseCallBack)