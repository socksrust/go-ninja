const initialState = {
  loginIsLoading: false,
  signupIsLoading: false,
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

  //signup
  case 'SIGNUP_REQUEST':
    newState = Object.assign({}, state, {
      signupIsLoading: true
    })
    return newState

  case 'SIGNUP_SUCCESS':
    console.log('isAuth gonna be true')
    newState = Object.assign({}, state, {
      signupIsLoading: false,
      isAuth: true
    })
    return newState

  case 'SIGNUP_FAILURE':
    newState = Object.assign({}, state, {
      signupIsLoading: false
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