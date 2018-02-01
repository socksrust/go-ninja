import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import styled from 'styled-components/native'
import GenericHeader from '../components/generic-header'
import JobCard from '../components/job-card'
import { connect } from 'react-redux'
import { dispatch } from '../redux/store'
import { login, logout } from '../redux/actions/auth-actions'

const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: #ffffff;
`

const Logo = styled.Text`
  color: #ffffff;
  font-size: 59px;
`

const SpanBold = styled.Text`
  font-weight: bold;
`

const HeaderSubtitles = styled.Text`
  color: #ffffff;
  font-size: 20px;
  text-align: center;
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
  color: rgb(255, 82, 82);
`

const LoginButton = styled.TouchableOpacity`
  background-color: rgb(255, 82, 82);
  width: 100%;
  height: 70px;
  margin-bottom: 0px;
  justify-content: center;
  align-items: center;
`

const LoginText = styled.Text`
  font-size: 34px;
  color: #ffffff;
`

class Home extends React.Component {

  static navigationOptions = {
    header: <GenericHeader text='GoNinja' onPress={() => dispatch(logout())}/>
  };

  render() {
    const { navigate } = this.props.navigation
    return(
      <Wrapper>
        <FlatList
          style={{backgroundColor: '#ffffff'}}
          data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}]}
          renderItem={({item}) => <JobCard />}
        />
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
