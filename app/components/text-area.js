import React from 'react';
import { TextInput } from 'react-native'
import {Colors} from '../utils/theme'
import styled from 'styled-components/native'

const Input = styled.TextInput`
  text-align: left;
  width: 100%;
  height: 300px;
`




const TextArea = props => <Input multiLine textAlignVertical={'top'} {...props}/>

export default TextArea
