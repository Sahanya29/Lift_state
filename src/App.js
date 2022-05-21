
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Todolist from './components/Todolist';
import Todocount from './components/Todocount';
import Addtodo from './components/Addtodo';
import Footer from './components/Footer';
import {useState} from 'react'

function App() {

  const[todos,setTodos]=useState ([])

  

  const onFormSubmit  = (todoObj) => {
    console.log(todoObj)
    setTodos([...todos,todoObj.todo]) 

  }

  return (
    <div className='content-wrap'>
      <div className='page-container'>

     
   <div className='container text-center mt-5'>
     <div className='row'>
       <div className='col-sm-4'>
         <Addtodo  onFormSubmit={onFormSubmit} todos={todos}setTodos={setTodos}         />
       </div>
       <div className='col-sm-4'>
         <Todolist todos={todos}/>
       </div>
       <div className='col-sm-4'>
         <Todocount todos={todos} />
       </div >
       </div>
       </div>
       <div className='wt-100'>
       <Footer/>
       </div>
       </div>
       </div>
       
  );
}

export default App;
