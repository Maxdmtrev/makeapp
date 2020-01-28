import {ADD_USER, GET_CARD, GET_MAP, GET_URL, LOGIN_USER, LOGOUT_USER} from './actions';
import dataBase from '../components/construtor/dataBase';
import dataBase2 from '../components/construtor/dataBase2';
import dataBase3 from '../components/construtor/dataBase3';

const initialState = {
  constStore: dataBase, bathStore: dataBase2, kitchenStore: dataBase3, roomCard: {
    address: null, m2: null, countBath: null, countDoor: null, countRoom: null, price: null,desPrice:0,perePlanPrice:0
  }, isLogin: false, username: null, ymaps: null,
  
};

export default function (oldState = initialState, action) {
  console.log (action.desPrice);
  switch (action.type) {
  
    case ADD_USER:
      return {
        ...oldState, isLogin: action.isLogin, username: action.username,
      };
    case LOGIN_USER:
      return {
        ...oldState, isLogin: action.isLogin, username: action.username,
      };
    case LOGOUT_USER:
      return {
        ...oldState,
        isLogin: action.isLogin, username: action.username,
      };
    case GET_URL:
      return {
        ...oldState,
        isLogin: oldState.isLogin, username: oldState.username, src: action.data
      };
    case GET_CARD:
      const newRoomCard = {...oldState.roomCard};
      newRoomCard.address = action.address;
      newRoomCard.m2 = action.m2;
      newRoomCard.countBath = action.countBath;
      newRoomCard.countDoor = action.countDoor;
      newRoomCard.countRoom = action.countRoom;
      newRoomCard.desPrice = action.desPrice;
      newRoomCard.perePlanPrice = action.perePlanPrice;
          return {
        ...oldState, roomCard: newRoomCard
      };
    case GET_MAP:
      return {
        ...oldState,
        ymaps: action.ymaps
      };
    default:
      return oldState;
  }
};