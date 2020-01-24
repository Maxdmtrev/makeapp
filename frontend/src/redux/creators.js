import {ADD_NOTE, ADD_USER, DELETE_NOTE, EDIT_NOTE, VIEW_NOTE,LOGIN_USER,LOGOUT_USER} from './actions';

export const AddTodoAC = (todos) => {
  return {
    type: ADD_NOTE, newTodo: todos,
  };
};
export const ViewTodoAC = (todos, status) => {
  return {
    type: VIEW_NOTE, data: todos, done: status
  };
};
export const DeleteTodoAC = (todos) => {
  return {
    type: DELETE_NOTE, dataDelete: todos,
  };
};
export const EditTodoAC = (todos) => {
  return {
    type: EDIT_NOTE, data: todos
  };
};
export const AddUserAC = (status,user) => {
  return {
    type: ADD_USER,
    isLogin: status,
    username: user
  };
};
export const ReqUserAC = (status,user,data) => {
  return {
    type: LOGIN_USER,
    isLogin: status,
    username: user,
    data: data
  };
};export const LogoutUserAC = (status,user) => {
  return {
    type: LOGOUT_USER,
    isLogin: status,
    username: user
  };
};