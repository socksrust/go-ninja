import { Firebase } from '../../index'
import { NavigationActions } from 'react-navigation';

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


import { FBLoginManager } from 'react-native-facebook-login';
const Facebook = {
  login: (permissions) => {
    return new Promise((resolve, reject) => {
      FBLoginManager.loginWithPermissions(permissions || ['email'], (error, data) => {
        if (!error) {
          resolve(data.credentials.token);
        } else {
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
const Auth = { Facebook };

const fbLoginPermissions = ['email'];

export const facebookLogin = () => (
  Auth.Facebook.login(fbLoginPermissions)
    .then((token) => {
      Firebase.auth()
        .signInWithCredential(Firebase.auth.FacebookAuthProvider.credential(token))
    })
    .catch((err) => this.onError && this.onError(err))
);

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