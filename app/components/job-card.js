import React from 'react';
import { TextInput } from 'react-native'
import styled from 'styled-components/native'
import theme from '../utils/theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Badges from './badges'

const Wrapper = styled.TouchableOpacity`
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
  font-weight: 700;
`

const CompanyName = styled.Text`
  color: #2f80ed;
  font-size: 14px;
  font-weight: 500;
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
  font-weight: 500;
`

const BadgesWrapper = styled.View`
  flex: 1;
  flex-direction: row;
`


const JobCard = ({navigate, job}) => (
  <Wrapper onPress={() => navigate('Job', {job})}>
    <ContentWrapper>
      <ContentHead>
        <JobBasicInfos>
          <JobTitle>{job && job.jobTitle}</JobTitle>
          <CompanyName>{job &&job.company}</CompanyName>
        </JobBasicInfos>
        <JobLocationInfos>
          <Icon name='map-marker' size={12} color='#2f80ed' />
          <JobLocationText>{job && job.location}</JobLocationText>
        </JobLocationInfos>
      </ContentHead>
      <ContentSkills>
        <SkillsText>Skills</SkillsText>
        <BadgesWrapper>
          <Badges
            skills={job && job.skills}
          />
        </BadgesWrapper>
      </ContentSkills>
    </ContentWrapper>
  </Wrapper>
)

export default JobCard
