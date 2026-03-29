import { useState } from "react";
import { NewTodo } from "./NewTodo";
import { Todos } from "./Todos"
import Todo from "./todo";

export const TodoComponent = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    // const todos = [
    //     new Todo('Learn React'),
    //     new Todo('Learn Typescript')
    // ];

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos(prevState => {
            return prevState.concat(newTodo);
        })
    };

    const removeTodoHandler = (todoId: string) => {
        setTodos(prevState => {
            return prevState.filter(todo => todo.id !== todoId);
        })
    }

    return (
        <div>
            <p>
                This example demonstrates how to use **TypeScript with React** to build a simple todo list. A `Todo` class defines the structure of each todo item, ensuring type safety. The `TodoComponent` creates a list of typed todo objects and passes them as props to the `Todos` component. The `Todos` component uses TypeScript's type annotations (`React.FC to enforce that it receives an array of `Todo` items, then renders them dynamically. This approach improves code reliability, readability, and developer experience by catching type errors early.
            </p>
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos}
                onRemoveTodo={removeTodoHandler} />
        </div>
    )
}