import React, { useState } from 'react';

export function Input() {
    const [inputState, setInputState] = useState();

    const inputHandler = (e) => {
        e.preventDefault()
        setInputState(e.target.value)
    }
    const handlerSubmit = () => {
        alert(inputState)
    }
    return(
       <div>
           <form>
               <input onChange={inputHandler}/>
               <button type={'submit'} onClick={handlerSubmit}>Submit</button>
           </form>
       </div>
    )
}