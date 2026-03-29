import React from "react"
import Todo from "./todo"
import { TodoItem } from "./TodoItem"
import classes from './Todos.module.css';

export const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
    return (

        <ul className={classes.todos}>
            {props.items.length > 0 && <p><b>Click todo to delete</b></p>}

            {
                props.items.map((item) =>
                    <TodoItem key={item.id}
                        text={item.text}
                        onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
                    />
                )
            }
        </ul>
    )
}