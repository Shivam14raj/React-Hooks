import React, {useReducer} from 'react'
import App3 from './App3';


const reducer= (state, action)=>{
     if(action === 'increment'){
        return state+1;
     } 

     if(action === 'decrement'){
        return state-1;
     }
     return state; 
}

function App2(){
 const[counter, dispatch]= useReducer(reducer, 0)

  return (
     <>
     <div> 
          <h1>{counter}  </h1>
          <button onClick= {()=> dispatch("increment")} > increase value </button>
          <button onClick= {()=> dispatch("decrement")} > decrease value </button>
     </div>
     
       <App3/> 
       
      </>
  )
}

export default App2; 
