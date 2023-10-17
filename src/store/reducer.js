import { SET_TODO_INPUT,ADD_TODO_INPUT } from "./constants"

const initState = {
    todos: [],
    todoInput: ""
}
//test1 test222
const reducer = (state, action) => {
    switch(action.type){
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO_INPUT:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            throw new Error("Invalid action")
    }
}
export { initState }
export default reducer