export function fetchQuestions() {
  return dispatch => {
    fetch('https://opentdb.com/api.php?charset=utf-8&amount=10&difficulty=hard&type=boolean', {
      method: 'get',
      headers: {
          'Accept': 'application/json',
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    })
    .then(payload => payload.json())
    .then(payload => payload.results)
    .then(payload =>
      dispatch({
        type: 'FETCH_QUESTIONS',
        payload: payload
      })
    )
  }
}

export function answerQuestion(answer) {
  return dispatch => {
    dispatch({
      type: 'ANSWER_QUESTION',
      answer
    })
  }
}

export function answerLastQuestion(answer) {
  return dispatch => {
    dispatch({
      type: 'ANSWER_LAST_QUESTION',
      answer
    })
  }
}


export function playAgain() {
  return dispatch => {
    dispatch({
      type: 'PLAY_AGAIN'
    })
  }
}