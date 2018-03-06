import {firebasePublishJob} from '../../utils/firebase-api'
import Snackbar from 'react-native-snackbar';
import theme from '../../utils/theme'
import firebase from 'react-native-firebase'

export function publishAction(jobTitle, skills, company, location, description) {
  return dispatch => {
    dispatch({
      type: 'ADD_ITEM_REQUEST'
    })

    const currentUser = firebase.auth().currentUser;

    console.log('currentUser', currentUser)
    const saveObj = {
      jobTitle,
      skills: skills.split(', '),
      company,
      location,
      description
    }

    return firebasePublishJob(saveObj)
    .then(_ =>{
      Snackbar.show({
        title: 'Job posted! :D',
        backgroundColor: theme.accentColor
      })
      dispatch({
        type: 'ADD_ITEM_SUCCESS'
      })
    })
    .catch(_ => {
      Snackbar.show({
        title: 'Your job couldn`t be posted, please fill all infos.',
        backgroundColor: theme.alertColor
      })
    })
  }
}