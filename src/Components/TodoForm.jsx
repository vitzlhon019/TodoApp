import { useState } from "react"
import styles from '../css/TodoForm.module.css'

export default function TodoForm({todos,setTodos}){
    const [todo,setTodo] = useState({name:"",done:false});
    
    function handlesumit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo({name:"",done:false});
    }

    return(
        <>
        <form className={styles.todoForm} onSubmit={(e)=>handlesumit(e)}>
            <div className={styles.inputContainer}>
                <input placeholder="Enter todo item" className={styles.formInput} onChange={(e)=>setTodo({name:e.target.value,done:false})} type="text" value={todo.name}/>
                <button className={styles.formButton} type="submit">Add</button>
            </div>
        </form>
        </>
    )
}