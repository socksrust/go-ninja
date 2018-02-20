import {Firebase} from '../../index'
import { NavigationActions } from 'react-navigation';

export async function signup(email, pass, navigate) {
  try {
    await Firebase.auth().createUserWithEmailAndPassword(email, pass)
    navigate('Home')
  } catch (error) {
      console.log(error.toString())
  }
}

export async function login(email, pass, navigate) {
  try {
    await Firebase.auth().signInWithEmailAndPassword(email, pass)
    navigate('Home')
  } catch (error) {
      console.log(error.toString())
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
