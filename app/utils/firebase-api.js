import { Firebase } from '../../index'
import { NavigationActions } from 'react-navigation';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase'

// Calling the following function will open the FB login dialogue:
export const facebookLogin = async (navigate) => {
  try {
    const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw new Error('User cancelled request'); // Handle this however fits the flow of your app
    }

    console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

    // get the access token
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
    }

    // create a new firebase credential with the token
    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

    // login with credential
    const currentUser = await firebase.auth().signInWithCredential(credential);

    navigate('Home')
    console.info(JSON.stringify(currentUser.toJSON()))
  } catch (e) {
    console.error(e);
  }
}

export async function signup(email, pass, navigate) {
  try {
    console.log('signup')
    await Firebase.auth().createUserWithEmailAndPassword(email, pass)
    navigate('Home')
  } catch (error) {
      throw error.toString()
  }
}

export async function login(email, pass, navigate) {
  try {
    await Firebase.auth().signInWithEmailAndPassword(email, pass)
    navigate('Home')
  } catch (error) {
      throw error.toString()
  }
}


const Facebook = {
  login: (permissions) => {
    return new Promise((resolve, reject) => {
      FBLoginManager.loginWithPermissions(permissions || ['email'], (error, data) => {
        if (!error) {
          resolve(data.credentials.token);
        } else {
          console.log('error', error)
          reject(error);
        }
      });
    });
  },
  logout: () => {
    return new Promise((resolve, reject) => {
      FBLoginManager.logout((error, data) => {
        if (!error) {
          resolve(true);
        } else {
          reject(error);
        }
      });
    });
  }
}

export async function logout(navigate) {
  try {
    await Firebase.auth().signOut();
    navigate('Login')
  } catch (error) {
      console.log(error);
  }
}

function PublishJob(item){
  Firebase.database().ref('/joblist').push(item)
}

export const firebasePublishJob = (item) => new Promise((resolve, reject) => {
  resolve(PublishJob(item))
})

export const joblistRef = () => Firebase.database().ref('/joblist').orderByKey().limitToLast(100)