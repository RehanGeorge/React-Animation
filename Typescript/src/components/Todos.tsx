import TodoModel from "../models/todo";
import Todo from "./Todo";
import classes from './Todos.module.css';

const Todos: React.FC<{ items: TodoModel[], deleteHandler: (todoId: string) => void }> = (props) => {

    return (
        <ul className={classes.todos}>
            {props.items.map((item) => (
                <Todo key={item.id} text={item.text} deleteHandler={props.deleteHandler.bind(null, item.id)} id={item.id} />
            ))}
        </ul>
    )
}

export default Todos;