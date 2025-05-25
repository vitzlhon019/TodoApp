
import TodoItem from "./TodoItem.jsx"
import styles from '../css/TodoList.module.css'
export default function TodoList({todos,setTodos}){
    
    return(
        <>
        <div className={styles.list}>
            {todos.map(item=>
                <TodoItem key={item} item={item} setTodos={setTodos} todos={todos}/>
            )}
        </div>
        </>
    )
}