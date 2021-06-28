import React, { useRef } from 'react'

export default function Hook_UseRef() {
    let inputUsername = useRef(null)
    let inputPassword = useRef(null)
   
    const handleSubmit = () => {
        console.log(inputUsername.current.value);
        console.log(inputPassword.current.value);
    }

    return (
        <div className='m-5'>
            <p>This is a Hook UseRef</p>
            <div className="form-group">
                <p>usename</p>
                <input ref={inputUsername} type="text" className='form-control' />
            </div>
            <div className="form-group">
                <p>passwork</p>
                <input ref={inputPassword} type="text" className='form-control' />
            </div>
            <button className='btn btn-success' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

//   useRef replace document.getElementbyId like syntax javascript  
     