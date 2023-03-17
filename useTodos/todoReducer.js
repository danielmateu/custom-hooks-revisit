export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case 'add':
            return [...initialState, action.payload];

        case 'delete':
            return initialState.filter(todo => todo.id !== action.payload);

        case 'toggle':
            return initialState.map(todo =>
                (todo.id === action.payload)
                    ? { ...todo, done: !todo.done }
                    : todo
            );

        // case 'toggle-old':
        // return state.map(todo => {
        //     if (todo.id === action.payload) {
        //         return {
        //             ...todo,
        //             done: !todo.done
        //         }
        //     } else {
        //         return todo;
        //     }
        // });

        default:
            return initialState;
    }

}