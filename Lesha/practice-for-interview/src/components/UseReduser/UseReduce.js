import React, {useReducer} from 'react';

const initialState = { count: 0};
const reducer = ({count}, {type}) => {
    switch (type) {
        case 'increment': return {count: count +1};
        case 'decrement': return {count: count -1};
        default: return {};
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <>
        <div>
            {state.count}
        </div>
            <button onClick={()=> dispatch({type: 'increment'})}>+1</button>
            <button onClick={()=> dispatch({type: 'decrement'})}>-1</button>
        </>
    )
}