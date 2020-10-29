import React, {useReducer} from 'react';
import counterReducer from './counterReducer';

const Child2 = () => {
    const [ state, dispatch] = useReducer (counterReducer,10)
    return (
        <>
        <h1>This is child 2 counter {state} </h1>
        <button onClick={()=> dispatch ("increment")}> Increment </button>
        <button onClick={()=> dispatch ("decrement")}> decrement </button>
        </>
    )
}

export default Child2;