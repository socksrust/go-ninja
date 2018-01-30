import {AsyncStorage} from 'react-native'

export function login(email, password) {
  return dispatch => {
    dispatch({
      type: 'LOGIN_REQUEST'
    })

    const saveObj = {
      email,
      password
    }
    console.log(saveObj)
    return fetch('https://goninja.herokuapp.com/login', {
      method: 'POST',
      data: saveObj
    })
    .then(payload => {
      console.log(payload)
      // AsyncStorage.setItem('loginId', payload.email)
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload
      })}
    )
    .catch(error =>{
      console.log(error)
      dispatch({
        type: 'LOGIN_FAILURE',
        error
      })}
    )
  }
}

export function logout() {
  return dispatch => {
    return AsyncStorage.removeItem('loginId')
    .then(_ =>
      dispatch({
        type: 'LOGOUT_REQUEST'
      })
    )
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

export function checkAuth(email, password) {
  return dispatch => {
    return AsyncStorage.getItem('loginId')
    .then(payload => {
      console.log('checkAuth', payload)
      dispatch({
        type: 'CHECK_AUTH',
        payload
      })}
    )
  }
}

export function signup(email, password, firstName, lastName) {
  return dispatch => {
    dispatch({
      type: 'SIGNUP_REQUEST'
    })

    const saveObj = {
      email,
      password,
      firstName,
      lastName
    }
    console.log(saveObj)
    return fetch('https://goninja.herokuapp.com/user', {
      method: 'POST',
      data: saveObj
    })
    .then(payload => {
      console.log(payload)
      // AsyncStorage.setItem('loginId', payload.email)
      dispatch({
        type: 'SIGNUP_SUCCESS',
        payload
      })}
    )
    .catch(error =>{
      console.log(error)
      dispatch({
        type: 'SIGNUP_FAILURE',
        error
      })}
    )
  }
}
