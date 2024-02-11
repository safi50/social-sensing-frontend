import styled from 'styled-components';
import heartIcon from '../../assets/heart.svg';
import locationIcon from '../../assets/location.svg';
import webIcon from '../../assets/global.svg';
import profileImage from '../../assets/profile-pic.jpeg';
import sharedImage from '../../assets/cool-profile-picture.jpeg';
import shareIcon from '../../assets/heart.svg';
import sentimentIcon from '../../assets/frown.svg';
import userIcon from '../../assets/heart.svg';

const CardContainer = styled.div`
  display: flex;
  padding: 1rem;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  margin: 1rem;
  background-color: #fff;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: flex-start;
  width: 55%;
`;

const ProfileTextAndImage = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-grow: 1;`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1; 

`;

const NameHandleWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

const Name = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const Handle = styled.span`
  color: #1B95E0;
  font-weight: bold;
`;

const ContentSection = styled.div`
  color: #111;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-wrap: break-word;
  margin: 1rem 0;
  font-size: 1.4rem;
  font-weight: 400;
`;
const MatchesText = styled.div`
    color: #111;
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 1rem;
`;

const AdditionalInfo = styled.div`
  display: flex;
  align-items: center;
  color: #888888;
  font-size: 1.2rem;
  font-weight: 300;
`;

const InfoIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

const ImageSection = styled.div`
  width: 130px;
  height: 110px;
    border-radius: 8px;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  margin-left: 1rem;
  align-self: flex-end;

`;

const MetricsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  padding-right: 1rem; // Added padding to the right
  width: 45%;
`;

const Divider = styled.div`
  height: auto; 
  width: 1px;
  background-color: #EDEDED;
  margin: 0 2rem;
  align-self: stretch; 
`;

const MetricColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
`;

const MetricRow = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

const MetricLabel = styled.span`
    color: #888888;
    font-size: 1.4rem;
    font-weight: 300;
`;

const MetricValue = styled.span`
  font-size: 2rem;
  margin-right: 1rem;
`;


const ResultCardCompact = ({profileData, additionalMetrics}) => {
    // Placeholder data 
    // const profileData = {
    //     name: 'John Doe',
    //     handle: '@johndoe',
    //     profileImage: profileImage,
    //     content: 'Elden Ring wins Game of the Year Award at #TheGameAwards 2021.',
    //     sharedImage: sharedImage,
    //     sentiment: 'Neutral',
    //     matches: '#istanbul',
    //     reach: '2.1K',
    //     engagement: '200K',
    //     trending: '2.1K',
    //     timePublished: '11 hours ago',
    //     location: 'Turkey',
    //     platform: 'Twitter.com'
    // };
    // const additionalMetrics = {
    //     shares: '124K',
    //     hearts: '31K',
    //     users: '32K'
    // };
    return (
        <CardContainer>
            <ProfileSection>
                <ProfileImage src={profileData.profileImage} alt="Profile" />
                <ProfileTextAndImage>
                    <TextSection>
                        <NameHandleWrapper>
                            <Handle>{profileData.handle}</Handle>
                        </NameHandleWrapper>
                        <ContentSection>{profileData.content}</ContentSection>
                        <AdditionalInfo>
                            <span>Published {profileData.timePublished} &nbsp;&nbsp;&nbsp;</span>
                            <InfoIcon src={locationIcon} alt="Location" />
                            <span>{profileData.location}&nbsp;&nbsp;&nbsp;</span>
                            <InfoIcon src={webIcon} alt="Platform" />
                            <span>{profileData.platform}</span>
                        </AdditionalInfo>
                    </TextSection>
                    
                    <ImageSection imgUrl={profileData.sharedImage} />
                </ProfileTextAndImage>
            </ProfileSection>

            {/* Metrics Section Starts Here */}
            <Divider />

            <MetricsSection>
            
                <MetricRow>
                    <MetricColumn>
                        <MetricLabel>Reach</MetricLabel>
                        <MetricValue>{profileData.reach}</MetricValue>
                    </MetricColumn>
                    <MetricColumn>
                        <MetricLabel>Engagement</MetricLabel>
                        <MetricValue>{profileData.engagement}</MetricValue>
                    </MetricColumn>
                    <MetricColumn>
                        <MetricLabel>Trending Post</MetricLabel>
                        <MetricValue>{profileData.trending}</MetricValue>
                    </MetricColumn>
                </MetricRow>
               
            </MetricsSection>
        </CardContainer>
    );
};

export default ResultCardCompact;
