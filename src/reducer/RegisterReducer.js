import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE, OTP_REQUEST } from "src/utils";

const initialState = {
  error: null,
  msg: null,
  number: "",
  otp: "",
  user: {},
  userType: '',
  location: null,
  avatar: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
    case OTP_REQUEST:
      return {
        ...state,
        number: action.payload.number,
        userType: action.payload.userType,
        location: action.payload.location
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        avatar: action.payload.avatar,
        userType: action.payload.userType
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        msg: action.payload.msg
      };

    default:
      return state;
  }
};
