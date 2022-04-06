import React from "react";
import {TodosContext}from './Context/Todos'

const Todolist =()=>{
const todos = React.useContext(TodosContext)
return <div>
    <h1>123</h1>
    <ul>
        {
        todos.map((todo,index)=>{
            return <li onClick={()=>{
                // const newTodos = todos.map((todo,index2)=>{
                //     if (index === index2){
                //         return{
                //             ...todo,
                //             completed:!todo.completed
                //         }
                //     }
                //     return todo
                // })
                // setTodos(newTodos)
            }}>{todo.title}{todo.completed ? '勾勾':'未完成'}</li>
        })
    }
    </ul>
   </div>
}
export default Todolist;