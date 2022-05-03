export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export function addTodo(newtodo) {
    return{
        type: ADD_TODO,
        payload: newtodo

    };
}
export function deleteTodo(todoID) {
return {
    type: DELETE_TODO,
    payload: todoID
};
}
export function updateTodo(todo) {
    return{
     type: UPDATE_TODO,
    payload: todo

    };
}