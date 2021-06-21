

import React from 'react'

export default function CallbackFunction() {
    /**
     * callbackfunction là 1 function được truyền như 1 parameter vào 1 hàm khác
     */ 
    
    const getData = (callback) => {
            setTimeout(() => {
            console.log('getdata');
            callback()
        },3000)
    }
    
    const showData = () => {
            console.log('showdata')
    }
    
    getData(showData);

    return (
        <div>
            
        </div>
    )
}
