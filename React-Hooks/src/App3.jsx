import React, { useReducer } from 'react'
import App4 from './App4';

const reducer = (state, action)=>{
     switch(action.type){
        case "LOGIN":
        return{
           isLoggedIn: true, 
           username: action.payload,
           error:""
        } 

        case "LOGOUT": 
        return{
            isLoggedIn: false,
            username:"",
            error: ""
        } 
        case "ERROR":
            return{
              ...state, 
              error: "invalid Login",
            };
        
            default:
                return state; 
     }
}




function App3() {
    const [state, dispatch]= useReducer(reducer, {
        isLoggedIn: false, 
        username: "", 
        error:""
    }); 
  return ( 
    <>
       {state.isLoggedIn ? (
         <> 
          <h2>Welcome to home page</h2> 
           <button onClick={()=>{dispatch({type: "LOGOUT"})}} >Logout</button>
         </>
       ): (
        <>
         <button onClick={()=>{dispatch({type: "LOGIN", payload: "rahul"})}} > Login </button>
         {state.error && <p>{state.error}</p> }
        </>
       )}
       
    </>
    
  )
}

export default App3
