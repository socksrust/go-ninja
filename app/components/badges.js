import React from 'react';
import { TextInput } from 'react-native'
import styled from 'styled-components/native'
import theme from '../utils/theme'

const BadgeWrapper = styled.View`
  background-color: ${theme.primaryColor};
  border-radius: 10;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  height: 17px;
`

const BadgeText = styled.Text`
  font-size: 9.5px;
  color: #ffffff;
  padding: 0 6px 0 6px;
`

const Badges = props =>
  props.skills.map((text, key) => (
    <BadgeWrapper key={key}>
      <BadgeText>{text}</BadgeText>
    </BadgeWrapper>))

export default Badges
