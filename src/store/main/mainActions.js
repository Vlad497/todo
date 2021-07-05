export const removeInput = (id) => {
    return {
        type: 'REMOVE_INPUT',
        id: id
    }
}

export const addInput = (userInput) => {
    return {
        type: 'ADD_TODO_LIST_ITEM',
        value: userInput
    }
}