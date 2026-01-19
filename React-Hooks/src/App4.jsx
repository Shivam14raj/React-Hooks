import React from 'react'
import { useRef } from 'react'
function App4() {

    const inputref= useref(null)

    const onClick=()=>{
       inputref.current.focus(); // to focus automatic 
       inputref.current.value=""; // clear the input when I click submit
    } 

  return (
    <div>
        <h1>Name</h1>
        <input type="text" placeholder='ex....' ref={inputref} />
        <button onClick={onClick}>submit</button>

    
    </div>
  )
}

export default App4
