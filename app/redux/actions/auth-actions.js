import {AsyncStorage} from 'react-native'
import {login, signup} from '../../utils/firebase-api'

export function loginAction(email, password, navigate) {
  return dispatch => {
    dispatch({
      type: 'LOGIN_REQUEST'
    })

    const saveObj = {
      email,
      password
    }
    return login(email, password, navigate)
    .then(_ =>
      dispatch({
        type: 'LOGIN_SUCCESS'
      })
    )
    .catch(error => {
      console.log('errorssss', error)
      dispatch({
        type: 'LOGIN_FAILURE',
        error
      })}
    )
  }
}

export function signupAction(email, password, navigate) {
  return dispatch => {
    console.log('signupaction')
    dispatch({
      type: 'REGISTER_REQUEST'
    })

    return signup(email, password, navigate)
    .then(res =>
      dispatch({
        type: 'REGISTER_SUCCESS'
      })
    )
    .catch(error => {
      console.log('signup error', error)
      dispatch({
        type: 'REGISTER_FAILURE',
        error
      })}
    )
  }
}

export function logout() {
  return dispatch => {
    console.log('logout action')
    return AsyncStorage.removeItem('loginId')
    .then(_ =>
      dispatch({
        type: 'LOGOUT_SUCCESS'
      })
    )
    .catch(error =>
      dispatch({
        type: 'LOGOUT_FAILURE',
        error
      })
    )
  }
}

export function clearErrorMessage() {
  return dispatch => {
    dispatch({
      type: 'CLEAR_ERROR_MESSAGE'
    })
  }
}

