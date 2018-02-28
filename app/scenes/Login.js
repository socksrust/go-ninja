import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import RedInput from '../components/red-input'
import theme from '../utils/theme'
import { connect } from 'react-redux'
import { dispatch } from '../redux/store'
import { loginAction, facebookLoginAction } from '../redux/actions/auth-actions'
import Loading from '../components/loading'

const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: #ffffff;
`

const Header = styled.View`
  flex: 1.3;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${theme.primaryColor};
`

const Logo = styled.Text`
  color: #ffffff;
  font-size: 59px;
`

const SpanBold = styled.Text`
  font-weight: bold;
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
  color: ${theme.primaryText};
  font-size: 24px;
  font-weight: 700;
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
  color:  ${theme.accentColor};
`

const LoginButtonsWrapper = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
`

const LoginButton = styled.TouchableOpacity`
  background-color: ${theme.primaryColor};
  width: 100%;
  height: 40px;
  margin-bottom: 0px;
  justify-content: center;
  align-items: center;
  border-radius: 50;
  margin-bottom: 7px;
`

const FacebookButton = styled.TouchableOpacity`
  background-color: ${theme.facebookColor};
  width: 100%;
  height: 40px;
  margin-bottom: 0px;
  justify-content: center;
  align-items: center;
  border-radius: 5;
  margin-top: 7px;
  shadow-offset: { width: 0, height: 0 };
  shadow-opacity: 0.25;
  shadow-radius: 5;
`

const ErrorText = styled.Text`
  font-size: 14px;
  color: red;
  font-weight: 700;
  margin-top: 7px;
`

const LoginText = styled.Text`
  font-size: 24px;
  color: #ffffff;
`

class Home extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleLoginChange(text) {
    this.setState({email: text})
  }

  handlePasswordChange(text) {
    this.setState({password: text})
  }

  handleLoginPress() {
    const { navigate } = this.props.navigation
    dispatch(loginAction(this.state.email, this.state.password, navigate))
  }

  handleFacebookLoginPress() {
    dispatch(facebookLoginAction())
  }

  render() {
    const { navigate } = this.props.navigation
    const {loginIsLoading, authError} = this.props
    return(
      <Wrapper>
        <Header>
          <Logo><SpanBold>Go</SpanBold> Ninja</Logo>
        </Header>
        <Form>
          <FormTitle>Welcome back!</FormTitle>
          <RedInput
            selectTextOnFocus
            placeholder='Login'
            onChangeText={(text) => this.handleLoginChange(text)}
          />
          <PasswordWrapper>
            <RedInput
              placeholder='Password'
              secureTextEntry
              onChangeText={(text) => this.handlePasswordChange(text)}
            />
            <ErrorText>{authError ? authError: ' '}</ErrorText>
          </PasswordWrapper>
          <LoginButtonsWrapper>
            <LoginButton onPress={() => this.handleLoginPress()}>
              {loginIsLoading ? (
                <ActivityIndicator size="small" color="#ffffff" />
              ) : (
                <LoginText>Login</LoginText>
              )}
            </LoginButton>
            <Text>Or</Text>
            <FacebookButton onPress={() => this.handleFacebookLoginPress()}>
                <LoginText>Sign in with facebook</LoginText>
            </FacebookButton>
          </LoginButtonsWrapper>
          <GoButton onPress={() => navigate('Signup')}><FormMessage>Not registered yet? <SpanRed>Sign up</SpanRed> here!</FormMessage></GoButton>
        </Form>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    loginIsLoading: state.loginIsLoading,
    authError: state.authError
  }
}

export default connect(mapStateToProps)(Home)
