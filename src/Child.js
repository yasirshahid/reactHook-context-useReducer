import React, { useContext } from 'react';
import counterContext from './counterContext'
const Child = () => {

    let counterValue = useContext (counterContext); 
    return(
        <div>
            <h1> This is child counter new {counterValue[0]}</h1>
            <button onClick={()=>counterValue[1](++counterValue[0])}>Increment</button>
            <button onClick={()=>counterValue[1](--counterValue[0])}>Decrement</button>
        </div>

    )
}

export default Child;