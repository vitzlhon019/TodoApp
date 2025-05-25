import { useState } from "react"
import styles from '../css/TodoForm.module.css'

export default function TodoForm({todos,setTodos}){
    const [todo,setTodo] = useState("");
    
    function handlesumit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo("");
    }

    return(
        <>
        <form className={styles.todoForm} onSubmit={(e)=>handlesumit(e)}>
            <div className={styles.inputContainer}>
                <input placeholder="Enter todo item" className={styles.formInput} onChange={(e)=>setTodo(e.target.value)} type="text" value={todo}/>
                <button className={styles.formButton} type="submit">Add</button>
            </div>
        </form>
        </>
    )
}