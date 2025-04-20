import { useContext } from "react";

import Todo from "./Todo";
import { TodosContext } from "../store/todos-context";
import classes from './Todos.module.css';

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map((item) => (
                <Todo key={item.id} text={item.text} removeTodo={todosCtx.removeTodo.bind(null, item.id)} id={item.id} />
            ))}
        </ul>
    )
}

export default Todos;