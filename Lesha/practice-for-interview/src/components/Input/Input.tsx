import React, { useState } from 'react';

export function Input() {
    const [state, setState] = useState<any | null>(null);

    const handleOnchange = (e:any) => {
        e.preventDefault()
        setState(e.target.value)
    }

    const handlerOnSubmit = (e:any) => {
        console.log(state)
        setState('')
        e.preventDefault()
    }

   return (
       <div>
           <form>
               <input type="text" onChange={handleOnchange} value={state}/>
               <button type='submit' onClick={handlerOnSubmit}>click</button>
           </form>
       </div>
   )
}