import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import theme from '../utils/theme'
import GenericHeader from '../components/generic-header'
import JobCard from '../components/job-card'
import { connect } from 'react-redux'
import { logout, joblistRef } from '../utils/firebase-api'

const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: #ffffff;
`

const IndicatorWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`


class Home extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      messages: []
    }
  }
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    joblistRef().on('child_added', (snap) => {
      const message = snap.val()
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }

  render() {
    const { navigate } = this.props.navigation
    return(
      <Wrapper>
        <GenericHeader
          text='GoNinja'
          onPress={() => logout(this.props.navigation.navigate)}
          onPublishPress={() => this.props.navigation.navigate('Publish')}
        />
        {this.state.messages.length !== 0 ? (
          <FlatList
            style={{backgroundColor: '#ffffff'}}
            data={this.state.messages}
            renderItem={({item}) => <JobCard key={item.key} job={item} navigate={navigate} />}
          />) : (
            <IndicatorWrapper>
              <ActivityIndicator size='large' color={theme.primaryColor}/>
            </IndicatorWrapper>
          )
        }

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
