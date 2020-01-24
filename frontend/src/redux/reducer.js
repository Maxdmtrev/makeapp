import {ADD_NOTE, ADD_USER, DELETE_NOTE, EDIT_NOTE, VIEW_NOTE,LOGIN_USER,LOGOUT_USER} from './actions';

const initialState = {
  todoData: null, done: null, isLogin: false, username: null
};

export default function (oldState = initialState, action) {
  switch (action.type) {
    case VIEW_NOTE:
      return {
        todoData: action.data, done: action.status, isLogin: oldState.isLogin, username: oldState.username
      };
    case ADD_NOTE:
      return {
        todoData: [
          ...oldState.todoData, action.newTodo
        ], isLogin: oldState.isLogin, username: oldState.username
      };
    case DELETE_NOTE:
      return {
        todoData: action.dataDelete, isLogin: oldState.isLogin, username: oldState.username
      };
    case EDIT_NOTE:
      return {
        todoData: action.data, isLogin: oldState.isLogin, username: oldState.username
      };
    case ADD_USER:
      return {
        isLogin: action.isLogin, username: action.username,
      };
      case LOGIN_USER:
      return {
        isLogin: action.isLogin, username: action.username,todoData:action.data,
      };
    case LOGOUT_USER:
      return {
        isLogin: action.isLogin, username: action.username,
      };
  
    default:
      return oldState;
  }
};