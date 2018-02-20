import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import styled from 'styled-components/native'
import RedInput from '../components/red-input'
import Header from '../components/header'
import { connect } from 'react-redux'
import { dispatch } from '../redux/store'
import theme from '../utils/theme'
import {signupAction} from '../redux/actions/auth-actions'

const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: #ffffff;
`

const Form = styled.View`
  flex: 5;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  margin-vertical: 20px;
  margin-horizontal: 30px;
`

const FormTitle = styled.Text`
  color: rgb(117, 117, 117);
  font-size: 24px;

`

const FormMessage = styled.Text`
  color: rgb(117, 117, 117);
  font-size: 16px;
`

const PasswordWrapper = styled.View`
  width: 100%;
  padding-bottom: 15px;
`

const GoButton = styled.TouchableOpacity`
  background-color: white;
`
const SpanRed = styled.Text`
  color: rgb(255, 82, 82);
`

const SignupButton = styled.TouchableOpacity`
  background-color: #007aff;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50;
`

const ErrorText = styled.Text`
  font-size: 14px;
  color: red;
  font-weight: 700;
  margin-top: 7px;
`

const SignupText = styled.Text`
  font-size: 24px;
  color: #ffffff;
`

class Register extends React.Component {
  static navigationOptions = {
    header: Header
  };

  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsernameChange(text) {
    this.setState({username: text})
  }

  handlePasswordChange(text) {
    this.setState({password: text})
  }

  handleRegisterPress(){
    const { navigate } = this.props.navigation
    console.log('hey hey hey')
    dispatch(signupAction(
      this.state.username,
      this.state.password,
      navigate
    ))
  }

  render() {
    const { navigate } = this.props.navigation
    const {registerIsLoading, authError} = this.props
    return(
      <Wrapper>
        <Form>
          <FormTitle>Be part of the Team!</FormTitle>
          <RedInput
            placeholder='Email'
            onChangeText={(text) => this.handleUsernameChange(text)}
          />
          <PasswordWrapper>
            <RedInput
              placeholder='Password'
              secureTextEntry
              onChangeText={(text) => this.handlePasswordChange(text)}
            />
            <ErrorText>{authError ? authError: ' '}</ErrorText>
          </PasswordWrapper>
        <SignupButton onPress={() => this.handleRegisterPress()}>
          {registerIsLoading ? (
            <SignupText>Loading.... </SignupText>
          ) : (
            <SignupText>Register</SignupText>
          )}
        </SignupButton>
        <GoButton onPress={() => navigate('Login')}><FormMessage>Already have an account? back to <SpanRed>Login</SpanRed></FormMessage></GoButton>
        </Form>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    registerIsLoading: state.registerIsLoading,
    authError: state.authError
  }
}

export default connect(mapStateToProps)(Register)