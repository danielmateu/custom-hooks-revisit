import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"


export const useTodo = (initialState = [], init) => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)
    // add to Localstorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleNewTodo = (todo) => {
        dispatch({
            type: 'add',
            payload: todo
        })
    }

    // Delete todo
    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'delete',
            payload: id
        })
    }

    // Toggle todo
    const handleToggle = (id) => {
        dispatch({
            type: 'toggle',
            payload: id
        })
    }

    // Count todos
    const todosCount = todos.length

    // Count pending todos
    const pendingTodosCount = todos.filter(todo => !todo.done).length

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggle,
        todosCount,
        pendingTodosCount,
    }
}
