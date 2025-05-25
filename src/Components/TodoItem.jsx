import styles from '../css/TodoItem.module.css'

export default function TodoItem({item,setTodos,todos}){
    function handleDelete(item){
        setTodos(todos.filter((todo)=>todo.name!==item));
    }
function handleDone(name){
        const newTodos = todos.map((todo)=>todo.name==name ? {...todo,done:!todo.done}:todo);
        setTodos(newTodos);

    }
    const isDone = item.done ? styles.completed:"";
    return(
        
        <>
        <div className={styles.item}>
            <div className={styles.itemName} > 
                <span className={isDone} onClick={()=>handleDone(item.name)}>{item.name}</span>
                <span><button className={styles.deleteButton} onClick={()=>handleDelete(item.name)}>X</button></span>
            </div>
            <hr/>
        </div>
        </>
    )
}