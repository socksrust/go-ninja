import {firebasePublishJob} from '../../utils/firebase-api'

export function publishAction(jobTitle, skills, company, location, description) {
  return dispatch => {
    dispatch({
      type: 'ADD_ITEM_REQUEST'
    })

    const saveObj = {
      jobTitle,
      skills: skills.split(', '),
      company,
      location,
      description
    }

    return firebasePublishJob(saveObj)
    .then(_ =>{
      dispatch({
        type: 'ADD_ITEM_SUCCESS'
      })
    })
  }
}