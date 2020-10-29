import React from 'react';
import Child from './Child';
import Child2 from './Child2';

const Parent = (props) => {
    return(
        <div>
            <h1> This is Parent counter {props.counter}</h1>
            <button>Increment</button>
            <hr/>
            <Child/>
            <hr /> 
            <Child2 />
        </div>
    )
}

export default Parent;