import { ADD_TODO, REMOVE_TODO,RENAME_TODO } from "./actions.types";

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case RENAME_TODO:
      return state.filter((todo) => {
        if(todo.id===action.payload.id){
          todo.todoString=action.payload.todoString;
          return todo;
        }
        else return todo;
      })
    default:
      return state;
  }
};

export default todoReducer;
