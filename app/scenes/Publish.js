import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import styled from 'styled-components/native'
import RedInput from '../components/red-input'
import Header from '../components/header'
import { connect } from 'react-redux'
import { dispatch } from '../redux/store'
import theme from '../utils/theme'
import {signupAction} from '../redux/actions/auth-actions'
import TextArea from '../components/text-area'
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

const PublishButton = styled.TouchableOpacity`
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

const PublishText = styled.Text`
  font-size: 24px;
  color: #ffffff;
`

class Register extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props)
    this.state = {
      jobTitle: '',
      skills: '',
      company: '',
      description: ''
    }
  }

  handlePublishPress(){
    const { navigate } = this.props.navigation
    console.log('hey hey hey')
    dispatch(publishAction(
      this.state.username,
      this.state.password,
      navigate
    ))
  }

  render() {
    const { navigate } = this.props.navigation
    const {registerIsLoading, authError} = this.props
    return(
      <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'flex-start', backgroundColor: '#ffffff'}}>
        <Header link='Home' navigation={this.props.navigation} />
        <Form>
          <FormTitle>Publish a new Job!! :D</FormTitle>
          <RedInput
            placeholder='Job Title'
            onChangeText={(text) => this.setState({jobTitle: text})}
          />
          <RedInput
            placeholder='Skills (separate by ,)'
            onChangeText={(text) => this.setState({skills: text})}
          />
          <RedInput
            placeholder='Company'
            onChangeText={(text) => this.setState({company: text})}
          />
          <TextArea
            placeholder='Job Description'
            onChangeText={(text) => this.setState({description: text})}
          />
          <PublishButton onPress={() => this.handlePublishPress()}>
            {registerIsLoading ? (
              <PublishText>Loading.... </PublishText>
            ) : (
              <PublishText>Publish</PublishText>
            )}
          </PublishButton>
        </Form>
      </ScrollView>
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