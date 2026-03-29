import { useRef } from "react"
import classes from './NewTodo.module.css';

export const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current?.value;

        if (enteredText?.trim().length === 0) {
            //throw error;
            return;
        }

        props.onAddTodo(enteredText);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className = {classes.form}>
                <label htmlFor='text'></label>
                <input type="text" id="text"
                    ref={todoTextInputRef}
                    placeholder="Enter to do text"
                />

                <button> Add To do</button>
            </form >
        </>
    )
}