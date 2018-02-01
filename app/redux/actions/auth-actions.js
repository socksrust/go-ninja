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
    fetch('https://goninja.herokuapp.com/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(saveObj)
    })
    .then(res => {
      console.log(res)
      if (res.ok) {
        return AsyncStorage.setItem('loginId', res._bodyInit)
      } else {
        throw new Error(res._bodyInit.message)
      }
      return
    })
    .then(res =>
      dispatch({
        type: 'LOGIN_SUCCESS'
      })
    )
    .catch(error => {
      console.log('error', error)
      dispatch({
        type: 'LOGIN_FAILURE',
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

export function checkAuth(email, password) {
  return dispatch => {
    return AsyncStorage.getItem('loginId')
    .then(payload => {
      console.log('checkAuth', payload)
      if (payload) {
        dispatch({
          type: 'CHECK_AUTH',
          payload
        })
      } else {
        return
      }
    })
  }
}

export function register(firstName, lastName, email, password) {
  return dispatch => {
    dispatch({
      type: 'REGISTER_REQUEST'
    })

    const saveObj = {
      firstName,
      lastName,
      email,
      password
    }

    console.log(saveObj)
    fetch('https://goninja.herokuapp.com/users', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(saveObj)
    })
    .then(res => {
      console.log(res)
      if (res.ok) {
        return AsyncStorage.setItem('loginId', res._bodyInit)
      } else {
        throw new Error(res._bodyInit.message)
      }
      return
    })
    .then(res =>
      dispatch({
        type: 'REGISTER_SUCCESS'
      })
    )
    .catch(error => {
      console.log('error', error)
      dispatch({
        type: 'REGISTER_FAILURE',
        error
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
