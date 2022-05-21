import React from "react";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";


function Todocount({}) {
 
let todolist=useSelector(state=>state.todo)
console.log("todolist  in count  component",todolist)

  return (

    <div className="border-end border-5 p-3">
        <p className="display-4 text-center text-warning">
          
          
        <FontAwesomeIcon icon="fal fa-air-conditioner" style={{color:'446A46'}}/> New Todo
            </p>

            
        
          <hr/>
          <p >{todolist.length}</p>
        
        
        
        
        
        
        
        
        
        
        
        
        
    </div>
  )
}

export default Todocount