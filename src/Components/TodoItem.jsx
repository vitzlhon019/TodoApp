export default function TodoItem({item,setTodos,todos}){
    function handleDelete(item){
        setTodos(todos.filter((todo)=>todo!==item))
    }
    return(
        
        <>
        <div>
            {item} <span><button onClick={()=>handleDelete(item)}>X</button></span>
        </div>
        </>
    )
}