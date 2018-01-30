const initialState = {
  loginIsLoading: false,
  isAuth: false
}

const questionsRecucer = (state = initialState, action) => {
  let newState
  let isCorrect
  switch (action.type) {

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