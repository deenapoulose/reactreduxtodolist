import   React from 'react'
import { useSelector } from 'react-redux';
import { todos } from '../redux/state';
import Todoitem from './todoitem'
// import {  useSelector} from "react-redux";
function Todolist() {
   let todos= useSelector(state=>state)

    return(
        <div className="my-4">
         
          {todos.map(todo=>{
              return <Todoitem key={todo.id} 
              todo={todo}/>
          }
            )}
        </div>
    )
}
export default Todolist;