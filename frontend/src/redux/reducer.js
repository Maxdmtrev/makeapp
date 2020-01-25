import {ADD_USER, GET_URL, LOGIN_USER, LOGOUT_USER} from './actions';

const initialState = {
  todoData: null, done: null, isLogin: false, username: null, src: [
    {
      img: null, zIndex: 1, title: '', id: null, sampleImage: null, descript: ''
    }, {
      img: null, zIndex: 2, title: '', id: null, sampleImage: null, descript: ''
    }, {
      img: null, zIndex: 1, title: '', id: null, sampleImage: null, descript: ''
    }, {
      img: null, zIndex: 2, title: '', id: null, sampleImage: null, descript: ''
    }, {
      img: null, zIndex: 2, title: '', id: null, sampleImage: null, descript: ''
    }
  ]
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