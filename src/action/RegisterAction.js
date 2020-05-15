import {
  REGISTER,
  REGISTER_FAILURE,
  OTP_REQUEST,
  OTP_SUCEESS,
  LOAD_BOTTOM_INFO,
  BOTTOM_INFO_OFF,
  LOAD_USER,
  UNLOAD_USER,
  SET_ERROR,
  CLEAR_ERROR,
  LOAD_USER_DETAILS
} from "src/utils";


import axiosConfig from '../utils/axioConfig';
const API = axiosConfig()
export const requestOtp = (data) => {

  return async dispatch => {
    dispatch({ type: LOAD_BOTTOM_INFO, payload: { data: { type: 'loading', msg: 'Requesting OTP' } } });
    dispatch({
      type: OTP_REQUEST, payload: {
        number: data.number,
        userType: data.userType,
        location: data.data.location,
        category: data.data.category
      }
    });

    const post_data = {
      phone_number: data.number,
      type: data.userType,
      location_id: data.location ? data.location.id : 1,
      category_id: data.category ? data.category.id : 1
    }
    await API.post('generate-otp', post_data).then(res => {
      const data = res.data
      if (data.status) {
        dispatch({ type: BOTTOM_INFO_OFF });
        dispatch({
          type: OTP_SUCEESS, payload: data.data
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
        error: [],
        type: 'NETWORK_REQUEST_FAILED'
      }
      dispatch({
        type: SET_ERROR, payload: error
      });
    })
  };
};



export const registerUser = (data) => {

  return async dispatch => {
    dispatch({ type: LOAD_BOTTOM_INFO, payload: { data: { type: 'loading', msg: ' Login in' } } });
    const post_data = {
      otp: data.otp,
      reference_id: data.otpReference

    }
    await API.post('check-otp', post_data).then(res => {
      const data = res.data
      if (data.status) {
        dispatch({ type: BOTTOM_INFO_OFF });
        dispatch({
          type: LOAD_USER, payload: data.data
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
        error: [],
        type: 'NETWORK_REQUEST_FAILED'
      }
      dispatch({
        type: SET_ERROR, payload: error
      });
    })

  }


};



export const clearError = () => {
  return async dispatch => {
    dispatch({
      type: CLEAR_ERROR
    });
  }
}



export const logout = () => {
  return async dispatch => {
    dispatch({ type: LOAD_BOTTOM_INFO, payload: { data: { type: 'loading', msg: 'Logging Out' } } });

    dispatch({ type: UNLOAD_USER });

  }
}


export const updateProfile = (data) => {

  return async dispatch => {
    dispatch({ type: LOAD_BOTTOM_INFO, payload: { data: { type: 'loading', msg: 'Updating..' } } });

    await API.post('update-user-details', data).then(res => {
      const data = res.data
      console.log(data)
      if (data.status) {
        dispatch({ type: BOTTOM_INFO_OFF });
        dispatch({ type: LOAD_USER_DETAILS, payload: data.data })

      } else {
        dispatch({
          type: SET_ERROR, payload: { ...data, type: 'PROFILE_UPDATE_ERROR', status: true }
        });
      }


    }).catch(err => {
      console.log(err);
      const error = {
        msg: 'Network Request Failed',
        error: [],
        type: 'NETWORK_REQUEST_FAILED'
      }
      dispatch({
        type: SET_ERROR, payload: error
      });
    })
  }



}
