
import React from "react";

import { useRef } from "react";

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}





const NewTodo : React.FC<NewTodoProps> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null);

   const  todoSubmitHandler = (event: React.FormEvent) => {

    event.preventDefault();

    const enteredText = textInputRef.current!.value;

    console.log(enteredText)

    props.onAddTodo(enteredText);


    }
    return (
    <form onSubmit={todoSubmitHandler}>
        <div>
            <label htmlFor="todo-text">
                Todo Items
            </label>
            <input type="text" id="todo-text" ref={textInputRef} />
        </div>
        <button type="submit">Add Todo</button>
    </form>
    )
}

export default NewTodo;