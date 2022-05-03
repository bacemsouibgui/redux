import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action"

const initstate = {
    todos: [
        {
        id:1,
        name: "watching TV"
    },
    {
        id:2,
        name: "going out"
    },
    {
        id:3,
        name: "reading a book"
    },

]
};

export const todoReducer =(state=initstate,action)=>{
    switch(action.type) {
        case ADD_TODO :
            return{
                ...state,
                todos: [...state.todos,action.payload]
            };
            case DELETE_TODO:
                return{
                ...state,
                todos: [...state.todos].filter((todo)=> todo.id !==action.payload)
                }
            case UPDATE_TODO:
                return {
                    ...state,
                     todos: [...state.todos].map((todo) => todo.id === action.payload.id ? action.payload : todo)
                }
            default:
                return state;
    }

}