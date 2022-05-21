import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { useForm } from "react-hook-form";
import{useState} from 'react'

function Addtodo({todos,setTodos,onFormSubmit}) {

  const{register,handleSubmit,formState:{error}}=useForm()
 
 
 
 

  return (
  
    
    <div className=" row row-sm-10 row-md-7 row-11">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="mb-3">
     <label htmlFor="todo">Enter todo task</label>
     <input type='text' id="todos"  className="form-control" {...register("todos",{required:true})}/>
     
   
     </div>
       <button className=" btn btn-info w-50" type="submit">*Task required </button>
  
 
 
   </form>
   <mt-4>
     <p className="display-3"> List of Todos</p>
     {
       todos.map((todo,index)=><h3 className="text-secondary" key={index}>{todo}</h3 >)
     }
   </mt-4>
  

    </div>
    
   
  
     
  
  
    )
}

export default Addtodo