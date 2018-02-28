const initialState = {
  facebookLoginIsLoading: false,
  loginIsLoading: false,
  registerIsLoading: false,
  isAuth: false,
  authError: ''
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
    newState = Object.assign({}, state, {
      loginIsLoading: false,
      isAuth: true
    })
    return newState

  case 'LOGIN_FAILURE':
    newState = Object.assign({}, state, {
      loginIsLoading: false,
      authError: action.error
    })
    return newState
  //logout
  case 'FACEBOOK_LOGIN_REQUEST':
    newState = Object.assign({}, state, {
      facebookLoginIsLoading: true
    })
    return newState

  case 'FACEBOOK_LOGIN_SUCCESS':
    newState = Object.assign({}, state, {
      facebookLoginIsLoading: false,
      isAuth: true
    })
    return newState

  case 'FACEBOOK_LOGIN_FAILURE':
    newState = Object.assign({}, state, {
      facebookLoginIsLoading: false,
      authError: action.error
    })
    return newState
  //logout
  case 'LOGOUT_SUCCESS':
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
    newState = Object.assign({}, state, {
      registerIsLoading: false
    })
    return newState

  case 'REGISTER_FAILURE':
    newState = Object.assign({}, state, {
      registerIsLoading: false,
      authError: action.error
    })
    return newState

  default:
    return state

  }
}

export default questionsRecucer