import {
  REGISTER,
  REGISTER_FAILURE,
  OTP_REQUEST,
  OTP_SUCEESS,
  LOAD_BOTTOM_INFO,
  BOTTOM_INFO_OFF,
  LOAD_USER,
  SET_ERROR,
  CLEAR_ERROR
} from "src/utils";
import { fetch, cancelRequest, POST } from "src/apis";
import { setProvidesAudioData } from "expo/build/AR";

import { API } from '../utils/axioConfig';
export const requestOtp = (data) => {

  await API.post('', data).then(res => { }).catch(err => {
    console.log(err);
    dispatch({
      type: NETWORK_REQUEST_FAILED
    })
  })

  return dispatch => {

    // dispatch({ type: LOAD_BOTTOM_INFO, payload: { data: { type: 'loading', msg: 'Requesting OTP' } } });


    // dispatch({
    //   type: OTP_REQUEST, payload: {
    //     number: number,
    //     userType: userType,
    //     location: data.location,
    //     category: data.category
    //   }
    // });

    // dispatch({
    //   type: OTP_SUCEESS, payload: {
    //     otpReference: '32423423'
    //   }
    // });


    const error = {
      msg: 'Error',
      errors: [],
      type: 'OTP_ERROR'
    }
    dispatch({
      type: SET_ERROR, payload: error
    });



    ///retquest otp

    // dispatch({
    //   type: BOTTOM_INFO_OFF,
    // });

  };
};



export const registerUser = (data) => {

  return async dispatch => {


    dispatch({
      type: LOAD_BOTTOM_INFO, payload: {
        data: {
          type: 'loading',
          msg: ' Login in'
        }

      }
    });


    const payload = {
      user: {
        name: 'sadu',
        phone: '732432423423',
        location: 12
      },
      token: 234234234234,
      type: 'customer'
    }


    dispatch({
      type: LOAD_USER, payload: payload
    });

    dispatch({
      type: BOTTOM_INFO_OFF,
    });






  }


};



