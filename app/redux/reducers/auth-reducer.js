const initialState = {
  loginIsLoading: false,
  registerIsLoading: false,
  isAuth: false
}

const questionsRecucer = (state = initialState, action) => {
  let newState
  let isCorrect
  switch (action.type) {

  //login
  case 'LOGIN_REQUEST':
    newState = Object.assign({}, state, {
      loginIsLoading: true
    })
    return newState

  case 'LOGIN_SUCCESS':
    console.log('isAuth gonna be true')
    newState = Object.assign({}, state, {
      loginIsLoading: false,
      isAuth: true
    })
    return newState

  case 'LOGIN_FAILURE':
    newState = Object.assign({}, state, {
      loginIsLoading: false
    })
    return newState
  //logout
  case 'LOGOUT_SUCCESS':
    console.log('lets Logout')
    newState = Object.assign({}, state, {
      isAuth: false
    })
    return newState

  //signup
  case 'REGISTER_REQUEST':
    newState = Object.assign({}, state, {
      registerIsLoading: true
    })
    return newState

  case 'REGISTER_SUCCESS':
    console.log('isAuth gonna be true')
    newState = Object.assign({}, state, {
      registerIsLoading: false,
      isAuth: true
    })
    return newState

  case 'REGISTER_FAILURE':
    newState = Object.assign({}, state, {
      registerIsLoading: false
    })
    return newState

  //check app auth
  case 'CHECK_AUTH':
    newState = Object.assign({}, state, {
      isAuth: action.payload ? true : false
    })
    return newState

    default:
    return state

  }
}

export default questionsRecucer