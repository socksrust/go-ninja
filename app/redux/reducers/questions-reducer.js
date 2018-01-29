const initialState = {
  questions: [],
  currentQuestion: {},
  questionNumber: 0,
  answers: [],
  correctAnswers: 0
}

const questionsRecucer = (state = initialState, action) => {
  let newState
  let isCorrect
  switch (action.type) {
  case 'FETCH_QUESTIONS':
    newState = Object.assign({}, state, {
      questions: action.payload,
      currentQuestion: action.payload[state.questionNumber]
    })
    return newState

  case 'ANSWER_QUESTION':
    isCorrect = state.currentQuestion.correct_answer === action.answer
    newState = Object.assign({}, state, {
      questionNumber: state.questionNumber+1,
      currentQuestion: state.questions[state.questionNumber+1],
      answers: [...state.answers, action.answer],
      correctAnswers: isCorrect ? state.correctAnswers+1 : state.correctAnswers
    })
    return newState

  case 'ANSWER_LAST_QUESTION':
    isCorrect = state.currentQuestion.correct_answer === action.answer
    newState = Object.assign({}, state, {
      answers: [...state.answers, action.answer],
      correctAnswers: isCorrect ? state.correctAnswers+1 : state.correctAnswers
    })
    return newState

  case 'PLAY_AGAIN':
    return initialState

  default:
    return state

  }
}

export default questionsRecucer