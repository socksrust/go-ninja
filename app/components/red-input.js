import React from 'react';
import { TextInput } from 'react-native'
import styled from 'styled-components/native'
import theme from '../utils/theme'

const Input = styled.TextInput`
  width: 100%;
  border-bottom-width: 1px;

`

const RedInput = props => (
  <Input
    {...props}
    selectionColor={theme.red}
    underlineColorAndroid={theme.red}
    autoCapitalize='none'
  />
)

export default RedInput
