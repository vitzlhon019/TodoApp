import styles from '../css/Footer.module.css'
export default function Footer({todos}){
    const completedTodos = todos.filter((item)=>item.done).length;
    const totalTodos = todos.length;
    return(
        <>
        <div className={styles.footer}>
            <span className={styles.item}>Completed tasks : {completedTodos} / {totalTodos}</span>
            
        </div>
        </>
    )
}