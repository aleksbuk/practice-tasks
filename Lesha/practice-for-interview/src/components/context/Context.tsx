import React from 'react'
import {createContext, useContext} from 'react';
const MyContext = createContext('')

export const Context = () => {
    return(
        <MyContext.Provider value={'Hello, I Context'}>
            <IntermediateComponent/>
        </MyContext.Provider>
    )
}

const IntermediateComponent = () => {
    return <Internal />
}

const Internal = () => {
    const context = useContext(MyContext)
    return (
        <>
            {`This is Internal component. I have got the message from Context: ${context}`}
        </>
    )

}