import { ADD_USER,LOGIN_USER,LOGOUT_USER,GET_URL} from './actions';


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
};
export const LogoutUserAC = (status,user) => {
  return {
    type: LOGOUT_USER,
    isLogin: status,
    username: user
  };
};

export const GetUrlAC = (data) => {
  return {
    type: GET_URL,
    data: data,
 
  };
};