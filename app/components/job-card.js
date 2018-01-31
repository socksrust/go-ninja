import React from 'react';
import { TextInput } from 'react-native'
import styled from 'styled-components/native'
import theme from '../utils/theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Badges from './badges'

const Wrapper = styled.View`
  height: 140px;
  flex: 1;
  background-color: #ffffff;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  margin: 10px;
  border-radius: 20;
  shadow-offset: { width: 0, height: 0 };
  shadow-opacity: 0.15;
  shadow-radius: 20;
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
  align-items: flex-start;
  border-radius: 20;
  margin: 15px;
`

const ContentHead = styled.View`
  flex: 2;
  flex-direction: row;
  border-radius: 20;
`

const JobBasicInfos = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 20;
`

const JobTitle = styled.Text`
  color: #434b52;
  font-size: 19px;
`

const CompanyName = styled.Text`
  color: #2f80ed;
  font-size: 14px;
`

const JobLocationInfos = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`

const JobLocationText = styled.Text`
  color: #2f80ed;
  font-size: 12px;
`

const ContentSkills = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20;
`

const SkillsText = styled.Text`
  font-size: 11px;
  color: #828282;
  margin-right: auto;
  margin-bottom: 10px;
`

const BadgesWrapper = styled.View`
  flex: 1;
  flex-direction: row;
`


const JobCard = props => (
  <Wrapper>
    <IconWrapper>
      <Icon name='file' size={38} color='#007aff' />
    </IconWrapper>
    <ContentWrapper>
      <ContentHead>
        <JobBasicInfos>
          <JobTitle>Front end dev</JobTitle>
          <CompanyName>Apple</CompanyName>
        </JobBasicInfos>
        <JobLocationInfos>
          <Icon name='map-marker' size={12} color='#2f80ed' />
          <JobLocationText>Vancouver, CA</JobLocationText>
        </JobLocationInfos>
      </ContentHead>
      <ContentSkills>
        <SkillsText>Skills</SkillsText>
        <BadgesWrapper>
          <Badges
            skills={['React', 'React-Native', 'Node']}
          />
        </BadgesWrapper>
      </ContentSkills>
    </ContentWrapper>
  </Wrapper>
)

export default JobCard
