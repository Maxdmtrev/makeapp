import {
  ADD_USER,
  GET_CARD,
  GET_MAP,
  LOGIN_USER,
  LOGOUT_USER,
  SET_PRESET,
  CLEAR_PRESET
} from "./actions";
import {
  PRICE_DOOR,
  PRICE_ELECTRIC,
  PRICE_TOILET,
  PRICE_SHOWER,
  PRICE_LOCKER,
  PRICE_KERAMAWALL,
  PRICE_BATHFLOOR,
  PRICE_BATH,
  PRICE_SILL,
  PRICE_PLINT,
  PRICE_MOLDING,
  PRICE_LIGHT,
  PRICE_FLOOR
} from "./price";
import dataBase from "../components/construtor/dataBase";
import dataBase2 from "../components/construtor/dataBase2";
import dataBase3 from "../components/construtor/dataBase3";

const initialState = {
  constStore: dataBase,
  bathStore: dataBase2,
  kitchenStore: dataBase3,
  roomCard: {
    address: null,
    m2: null,
    countBath: null,
    countDoor: null,
    countRoom: null,
    price: null,
    desPrice: 0,
    perePlanPrice: 0
  },
  isLogin: false,
  username: null,
  ymaps: null,
  priceDoor: 0,
  priceElectric: 0,
  priceFloor: 0,
  priceLight: 0,
  priceMolding: 0,
  pricePlint: 0,
  priceSill: 0,
  priceBath: 0,
  priceBathfloor: 0,
  priceKeramaWall: 0,
  priceLocker: 0,
  priceShower: 0,
  priceToilet: 0,
  selectedPreset: {}
};

export default function(oldState = initialState, action) {
  switch (action.type) {
    case PRICE_DOOR:
      return {
        ...oldState,
        priceDoor: action.priceDoor
      };
    case PRICE_ELECTRIC:
      return {
        ...oldState,
        priceElectric: action.priceElectric
      };
    case PRICE_FLOOR:
      return {
        ...oldState,
        priceFloor: action.priceFloor
      };
    case PRICE_LIGHT:
      return {
        ...oldState,
        priceLight: action.priceLight
      };
    case PRICE_MOLDING:
      return {
        ...oldState,
        priceMolding: action.priceMolding
      };
    case PRICE_PLINT:
      return {
        ...oldState,
        pricePlint: action.pricePlint
      };
    case PRICE_SILL:
      return {
        ...oldState,
        priceSill: action.priceSill
      };
    case PRICE_BATH:
      return {
        ...oldState,
        priceBath: action.priceBath
      };
    case PRICE_BATHFLOOR:
      return {
        ...oldState,
        priceBathfloor: action.priceBathfloor
      };
    case PRICE_KERAMAWALL:
      return {
        ...oldState,
        priceKeramaWall: action.priceKeramaWall
      };
    case PRICE_LOCKER:
      return {
        ...oldState,
        priceLocker: action.priceLocker
      };
    case PRICE_SHOWER:
      return {
        ...oldState,
        priceShower: action.priceShower
      };
    case PRICE_TOILET:
      return {
        ...oldState,
        priceToilet: action.priceToilet
      };

    case ADD_USER:
      return {
        ...oldState,
        isLogin: action.isLogin,
        username: action.username
      };
    case LOGIN_USER:
      return {
        ...oldState,
        isLogin: action.isLogin,
        username: action.username
      };
    case LOGOUT_USER:
      return {
        ...oldState,
        isLogin: action.isLogin,
        username: action.username
      };
    // case GET_URL:
    //   return {
    //     ...oldState,
    //     isLogin: oldState.isLogin, username: oldState.username, src: action.data
    //   };
    case GET_CARD:
      const newRoomCard = { ...oldState.roomCard };
      newRoomCard.address = action.address;
      newRoomCard.m2 = action.m2;
      newRoomCard.countBath = action.countBath;
      newRoomCard.countDoor = action.countDoor;
      newRoomCard.countRoom = action.countRoom;
      newRoomCard.desPrice = action.desPrice;
      newRoomCard.perePlanPrice = action.perePlanPrice;
      return {
        ...oldState,
        roomCard: newRoomCard
      };
    case GET_MAP:
      return {
        ...oldState,
        ymaps: action.ymaps
      };
    case SET_PRESET:
      return {
        ...oldState,
        selectedPreset: action.selectedPreset
      };
    case CLEAR_PRESET:
      return {
        ...oldState,
        selectedPreset: {}
      };
    default:
      return oldState;
  }
}
