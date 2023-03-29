import React, { useState } from 'react';

export function Input() {
   const [name, setName] = useState<any | null>(null)

    const handleOnclick = (e:any) => {
       setName(e.target.value)
    }

    const handleOnSubmit = (e:any) => {
       !name.length
           ? (alert('Enter any data'))
           : console.log(name)
             e.preventDefault()
             setName('')
    }

   return (
       <div>
           <form>
               <input type='text' value={name} onChange={handleOnclick}/>
               <button type='submit' onClick={handleOnSubmit}>submit</button>
           </form>
       </div>
   )
}