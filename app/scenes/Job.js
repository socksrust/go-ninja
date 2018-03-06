import React from 'react';
import { TextInput, Linking, View, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import theme from '../utils/theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Badges from '../components/badges'

const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 20;
  shadow-offset: { width: 0, height: 0 };
  shadow-opacity: 0.15;
  shadow-radius: 20;
  elevation: 1;
  margin: 15px;
`

const CardsWrapper = styled.View`
  flex: 1;
  background-color: #ffffff;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  border-top-left-radius: 20;
  border-top-right-radius: 20;
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
  margin: 15px 15px 0 15px;
`

const ContentHead = styled.View`
  flex: 2;
  flex-direction: row;
  border-radius: 20;
  max-height: 100px;
`

const JobBasicInfos = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 20;
`

const JobTitle = styled.Text`
  color: ${theme.primaryText};
  font-size: 32px;
  font-weight: 700;
`

const Description = styled.Text`
  color: ${theme.primaryText};
  font-size: 19px;
  font-weight: 700;
`

const LinkDescription = styled.Text`
  color: ${theme.accentColor};
  font-size: 19px;
  font-weight: 700;
`

const CompanyName = styled.Text`
  color: ${theme.secondaryText};
  font-size: 19px;
  font-weight: 500;
`

const JobLocationInfos = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`

const JobLocationText = styled.Text`
  color: ${theme.secondaryText};
  font-size: 15px;
`

const ContentSkills = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 20;
  max-height: 45px;
  margin-bottom: 10px;
`

const ContentDescription = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 20;
  flex-wrap: wrap;
`

const SkillsText = styled.Text`
  font-size: 19px;
  color: ${theme.secondaryText};
  margin-right: auto;
  margin-bottom: 10px;
  font-weight: 500;
`

const BadgesWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
`

const Link = styled.TouchableOpacity`
`
const ChatButton = styled.TouchableOpacity`
  background-color: ${theme.darkPrimaryColor}
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20;
  border-bottom-right-radius: 20;
  shadow-offset: { width: 0, height: 0 };
  shadow-opacity: 0.15;
  shadow-radius: 20;
  elevation: 1;
  height: 70px;
  width: 100%;
`

const ChatButtonText = styled.Text`
  color: ${theme.text};
  font-size: 19px;
  font-weight: 700;
`


class Job extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleClick(url) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url)
      }
    })
  }

  render() {
    const {navigation} = this.props

    const job = navigation.state.params && navigation.state.params.job
    let jobDescription = job && job.description
    let jobDescriptionEl = null
    const index = jobDescription && jobDescription.search('http')

    if (index !== -1 && jobDescription){
      jobDescriptionEl = jobDescription.split(' ').map((word, key) => {
        if (word.search('http') !== -1) {
          return <Link key={key} onPress={() => this.handleClick(word)}><LinkDescription>{word+' '}</LinkDescription></Link>
        }
        return (<Description key={key}>{word+' '}</Description>)
      })
    } else {
      jobDescriptionEl = (<Description>{jobDescription}</Description>)
    }

    return (
      <Wrapper>
        <CardsWrapper>
          <ContentWrapper>
            <ContentHead>
              <JobBasicInfos>
                <JobTitle>{job && job.jobTitle}</JobTitle>
                <CompanyName>{job &&job.company}</CompanyName>
              </JobBasicInfos>
              <JobLocationInfos>
                <Icon name='map-marker' size={11} color='#2f80ed' />
                <JobLocationText>{job && job.location}</JobLocationText>
              </JobLocationInfos>
            </ContentHead>
            <ScrollView>
              <ContentDescription>
                {jobDescriptionEl}
              </ContentDescription>
            </ScrollView>
            <ContentSkills>
              <SkillsText>Skills</SkillsText>
              <BadgesWrapper>
                <Badges
                  skills={job ? job.skills : []}
                />
              </BadgesWrapper>
            </ContentSkills>
          </ContentWrapper>
        </CardsWrapper>
      <ChatButton>
        <ChatButtonText>
          Send a message
        </ChatButtonText>
      </ChatButton>
    </Wrapper>
    )
  }
}
export default Job