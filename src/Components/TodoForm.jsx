import { useState } from "react"

export default function TodoForm({todos,setTodos}){
    const [todo,setTodo] = useState("");
    
    function handlesumit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo("");
    }

    return(
        <>
        <form onSubmit={(e)=>handlesumit(e)}>
            <div>
                <input onChange={(e)=>setTodo(e.target.value)} type="text" value={todo}/>
                <button type="submit">Add</button>
            </div>
        </form>
        </>
    )
}