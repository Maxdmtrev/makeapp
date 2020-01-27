import {ADD_USER, GET_URL, LOGIN_USER, LOGOUT_USER} from './actions';
import dataBase from "../components/construtor/dataBase";
import dataBase2 from "../components/construtor/dataBase2";
import dataBase3 from "../components/construtor/dataBase3";

const initialState = {
  constStore: dataBase,
  bathStore: dataBase2,
  kitchenStore: dataBase3

};

export default function (oldState = initialState, action) {
  switch (action.type) {
  
    case ADD_USER:
      return {
        isLogin: action.isLogin, username: action.username,
      };
    case LOGIN_USER:
      return {
        isLogin: action.isLogin, username: action.username, todoData: action.data,
      };
    case LOGOUT_USER:
      return {
        isLogin: action.isLogin, username: action.username,
      };
    case GET_URL:
      return {
        isLogin: oldState.isLogin, username: oldState.username, src: action.data
      };
    default:
      return oldState;
  }
};