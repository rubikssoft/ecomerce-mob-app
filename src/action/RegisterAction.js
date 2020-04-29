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

import axiosConfig from '../utils/axioConfig';
const API = axiosConfig()
export const requestOtp = (data) => {



  return async dispatch => {



    // dispatch({
    //   type: OTP_SUCEESS, payload: {
    //     otpReference: '32423423'
    //   }
    // });

    // console.log(data);

    dispatch({
      type: OTP_REQUEST, payload: {
        number: data.number,
        userType: data.userType,
        location: data.location,
        category: data.category
      }
    });
    dispatch({ type: LOAD_BOTTOM_INFO, payload: { data: { type: 'loading', msg: 'Requesting OTP' } } });
    const post_data = {
      phone_number: data.number,
      type: data.userType,
      location_id: data.location ? data.location.id : 0,
      category_id: data.category ? data.category.id : 0
    }
    await API.post('generate-otp', post_data).then(res => {
      const data = res.data
      if (data.status) {
        dispatch({ type: BOTTOM_INFO_OFF });
        dispatch({
          type: OTP_SUCEESS, payload: {
            otpReference: '32423423'
          }
        })

      } else {
        dispatch({
          type: SET_ERROR, payload: { ...data, type: 'OTP_ERROR', status: true }
        });
      }


    }).catch(err => {
      console.log(err);
      const error = {
        msg: 'Network Request Failed',
        errors: [],
        type: 'NETWORK_REQUEST_FAILED'
      }
      dispatch({
        type: SET_ERROR, payload: error
      });
    })
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



export const clearError = () => {
  return async dispatch => {
    dispatch({
      type: CLEAR_ERROR
    });
  }
}