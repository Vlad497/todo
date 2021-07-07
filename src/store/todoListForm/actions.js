export const removeTodoItem = (id) => {
    return {
        type: 'REMOVE_TODO_ITEM',
        id: id
    }
}

export const addTodoItem = (userInput) => {
    return {
        type: 'ADD_TODO_ITEM',
        value: userInput
    }
}

export const changeTodoItem = (id) => {
    return {
        type: 'CHANGE_TODO_ITEM',
        id: id
    }
}

