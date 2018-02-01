import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import styled from 'styled-components/native'
import RedInput from '../components/red-input'
import theme from '../utils/theme'
import { connect } from 'react-redux'
import { dispatch } from '../redux/store'
import { login } from '../redux/actions/auth-actions'

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
  background-color:  #007aff;
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
  color: rgb(117, 117, 117);
  font-size: 24px;

`

const FormMessage = styled.Text`
  color: rgb(117, 117, 117);
  font-size: 16px;
`

const GoButton = styled.TouchableOpacity`
  background-color: white;
`
const SpanRed = styled.Text`
  color:  #007aff;
`

const LoginButton = styled.TouchableOpacity`
  background-color:  #007aff;
  width: 100%;
  height: 45px;
  margin-bottom: 0px;
  justify-content: center;
  align-items: center;
  border-radius: 50;
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
    console.log(this.state.email, this.state.password)
    dispatch(login(this.state.email, this.state.password))
  }

  render() {
    const { navigate } = this.props.navigation
    const {loginIsLoading} = this.props
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
          <RedInput
            placeholder='Password'
            secureTextEntry
            onChangeText={(text) => this.handlePasswordChange(text)}
          />
          <LoginButton onPress={() => this.handleLoginPress()}>
            {loginIsLoading ? (
              <LoginText>Loading.... </LoginText>
            ) : (
              <LoginText>Login</LoginText>
            )}
          </LoginButton>
          <GoButton onPress={() => navigate('Signup')}><FormMessage>Not registered yet? <SpanRed>Sign up</SpanRed> here!</FormMessage></GoButton>
        </Form>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    loginIsLoading: state.loginIsLoading
  }
}

export default connect(mapStateToProps)(Home)
