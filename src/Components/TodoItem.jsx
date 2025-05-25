import styles from '../css/TodoItem.module.css'

export default function TodoItem({item,setTodos,todos}){
    function handleDelete(item){
        setTodos(todos.filter((todo)=>todo!==item))
    }
    return(
        
        <>
        <div className={styles.item}>
            <div className={styles.itemName}> {item}
                <span><button className={styles.deleteButton} onClick={()=>handleDelete(item)}>X</button></span>
            </div>
            <hr/>
        </div>
        </>
    )
}