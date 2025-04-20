import classes from './Todo.module.css';

const Todo: React.FC<{ text: string; removeTodo: (id: string) => void, id: string }> = (props) => {
    return (
        <div className={classes.item}>
            <li className={classes.listItem}>
                {props.text}
                <button className={classes.button} onClick={() => props.removeTodo(props.id)}>Delete</button>
            </li>
        </div>
    )
};

export default Todo;