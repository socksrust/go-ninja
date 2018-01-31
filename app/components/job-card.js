import React from 'react';
import { TextInput } from 'react-native'
import styled from 'styled-components/native'
import theme from '../utils/theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Wrapper = styled.View`
  height: 140px;
  background-color: #ffffff;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  margin: 8px;
  border-radius: 15;
  shadow-color: gray;
  shadow-offset: { width: 0, height: 0 };
  shadow-opacity: 0.6;
  shadow-radius: 15;
  elevation: 1;
`

const IconWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContentWrapper = styled.View`
  flex: 1;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`





const GenericHeader = props => (
  <Wrapper>
    <IconWrapper>
      <Icon name='file' size={38} color='#007aff' />
    </IconWrapper>
    <ContentWrapper>
    </ContentWrapper>
  </Wrapper>
)

export default GenericHeader
