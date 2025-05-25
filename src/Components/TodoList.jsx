
import TodoItem from "./TodoItem.jsx"
export default function TodoList({todos,setTodos}){
    
    return(
        <>
        {todos.map(item=>
            <TodoItem key={item} item={item} setTodos={setTodos} todos={todos}/>
        )}
        
        </>
    )
}