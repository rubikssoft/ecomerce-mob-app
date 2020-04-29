import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE, OTP_REQUEST, OTP_SUCEESS } from "src/utils";

const initialState = {
  error: null,
  msg: null,
  number: "",
  otp: "",
  otpReference: '',
  user: {},
  userType: '',
  location: null,
  avatar: null,
  category: '',
  shopename: '',
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
    case OTP_REQUEST:
      return {
        ...state,
        number: payload.number,
        userType: payload.userType,
        location: payload.location,
        category: payload.category ? payload.category : null,
        shopename: payload.shopename ? payload.shopename : null,
        otpReference: ''
      };
      break;
    case OTP_SUCEESS:
      return {
        ...state,
        otpReference: payload.reference_id
      };

      break;
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        avatar: payload.avatar,
        userType: payload.userType,
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
        msg: payload.msg
      };

    default:
      return state;
  }
};
