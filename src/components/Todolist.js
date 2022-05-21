import React, { Component }  from "react";
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaAccusoft } from "react-icons/fa";
import { faCheck, faTasks} from '@fortawesome/free-solid-svg-icons'
import { faAccusoft } from "@fortawesome/free-brands-svg-icons";
import todoImage from "../images/1.svg"
import{useSelector} from 'react-redux'
 

function Todolist() {
   let todolist=useSelector(state=>state.todo)
   console.log("the todo list is",todolist)


   return (
      <div className="  border-end display-4 text-center  " ><div className="d-inline id heading"  ><FontAwesomeIcon icon={faAccusoft} className=' wt-25%' size='xs' /> 
    <h5  >Todolist8</h5>
      <img src={todoImage} className="w-25"/>
      
      </div>
     <hr/>
     {

       todolist.map((todoTask,index)=><h3 className="text-warning" key={index}>{todoTask}</h3>)
     }
     
     
     
     </div>
   )
 }
 
 export default Todolist