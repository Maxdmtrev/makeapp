import {
  ADD_USER,
  GET_CARD,
  GET_URL,
  LOGIN_USER,
  LOGOUT_USER,
  GET_MAP,
  SET_PRESET,
  CLEAR_PRESET,
} from './actions';

export const AddUserAC = (status, user) => {
  return {
    type: ADD_USER,
    isLogin: status,
    username: user,
  };
};

export const ReqUserAC = (status, user) => {
  return {
    type: LOGIN_USER,
    isLogin: status,
    username: user,
  };
};

export const LogoutUserAC = (status, user) => {
  return {
    type: LOGOUT_USER,
    isLogin: status,
    username: user,
  };
};

export const GetUrlAC = (data) => {
  return {
    type: GET_URL,
    data,
  };
};

export const GetCardAC = (
  address,
  m2,
  countBath,
  countDoor,
  countRoom,
  designPrice,
  changeLayoutPrice,
  price,
) => ({
  type: GET_CARD,
  address,
  m2,
  countBath,
  countDoor,
  countRoom,
  designPrice,
  changeLayoutPrice,
  price,
});

export const GetMapAC = (map) => ({
  type: GET_MAP,
  ymaps: map,
});

export const SetPresetAC = (data) => ({
  type: SET_PRESET,
  selectedPreset: data,
});

export const ClearPresetAC = () => ({
  type: CLEAR_PRESET,
  selectedPreset: {},
});
