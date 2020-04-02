import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE, OTP_REQUEST } from "src/utils";
import { fetch, cancelRequest, POST } from "src/apis";

export const registerUser = ({ name, email, mobile, password }) => {
  return async dispatch => {
    dispatch({
      type: REGISTER
    });
  };
};

export const requestOtp = ({ number, userType, location }) => {
  return dispatch => {
    dispatch({
      type: OTP_REQUEST, payload: {
        number: number,
        userType: userType,
        location: location
      }
    });
  };
};

