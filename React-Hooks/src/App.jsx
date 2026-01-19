import { useReducer} from "react";
import React  from "react"; 
import App2 from "./App2";

const reducer=(state, action)=>{
   switch(action.type){
       case "Increment":
        return {count: state.count+1, showText: state.showText}
        case "toggleShowText":
        return {count: state.count, showText: !state.showText}
      default: 
      return state 
   }   

}     

 const useReducerHook=  function (){
  const [state, dispatch]= useReducer(reducer,
  {count:0, showText: false})   

   return  <>
     <div>  
      <h1>{state.count}</h1> 
   <button onClick={()=>{
      dispatch({type: "Increment", type:"toggleShowText"})
   }}>Increment</button> </div>
    
    {state.showText && <p>this is text</p>}  

    <App2/>

   </> 

   
} 
 export default useReducerHook; 