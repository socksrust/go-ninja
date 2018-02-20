import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 50;
  border-color: #ffffff;
  border-top-width: 2px;
  border-left-width: 2px;
  border-bottom-width: 2px;
`

export default loading = () => (
  <Wrapper />
)