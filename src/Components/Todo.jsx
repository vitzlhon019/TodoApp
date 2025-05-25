import { useState } from "react"
import TodoForm from "./TodoForm.jsx"
import TodoList from "./TodoList.jsx"
export default function Todo(){
    const [todos,setTodos] = useState([])

    return(
        <>
        <TodoForm todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
        </>
    )
}