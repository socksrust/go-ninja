import React from 'react';
import { TextInput } from 'react-native'
import styled from 'styled-components/native'
import theme from '../utils/theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Wrapper = styled.View`
  height: 70px;
  background-color: black;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ArrowButton = styled.TouchableOpacity`
  margin-right: auto;
  margin-left: 15px;
`

const Logo = styled.Text`
  font-size: 35px;
  color: #ffffff;
  margin-right: auto;
`

const BoldSpan = styled.Text`
  font-weight: bold;
`

const RedInput = props => (
  <Wrapper>
    <ArrowButton onPress={() => props.navigation.navigate('Login')}>
      <Icon name="arrow-left" size={35} color="#ffffff" />
    </ArrowButton>
    <Logo>
    <BoldSpan>Go</BoldSpan> Ninja
    </Logo>
  </Wrapper>
)

export default RedInput
