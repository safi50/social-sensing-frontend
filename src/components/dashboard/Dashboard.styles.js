import styled from "styled-components";


const sizes = {
    desktop: '992px',
    tablet: '768px',
    phone: '630px',
  };

const media = {
desktop: `(min-width: ${sizes.desktop})`,
tablet: `(min-width: ${sizes.tablet})`,
phone: `(max-width: ${sizes.phone})`,
};

export const DashboardContainer = styled.div`
    background-color: #F4F4F4
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px;

  @media ${media.phone} {
    padding: 5px 5px;
  }
`;

export const Header = styled.p`
    font-size: 18px;
    font-weight: 500
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
`

export const RefreshButton = styled.button`
    background-color: transparent;
    border: 1px solid #6937F2;
    border-radius: 5px;
    padding: 3px 3px 0px 3px;
    cursor: pointer;
`;

export const RefreshIcon = styled.img`
    height: 2rem;
    width: 2rem;
    object-fit: cover;
  `

export const DownloadButton = styled.button`
    background-color: #6937F2;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 20px;
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media ${media.phone} {
        padding: 5px 10px;
    }
`

export const DownloadIcon = styled.img`
    height: 2rem;
    width: 2rem;
    object-fit: cover;
    margin-right: 5px
  `

export const SubHeadingContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px 30px;

@media ${media.phone} {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`

export const HashtagContainer = styled.div`
    background-color: white;
    padding: 10px;
    // padding-right: 40%;
    border-radius: 5px;
    display: flex;
    align-items: center;
`

export const PurpleCircle = styled.img`
    height: 1rem;
    width: 1rem;
    object-fit: cover;
  `

export const HashtagText = styled.span`
    font-size: 12px;
    padding-left: 10px;
    margin-right: 10px;
    
    @media ${media.desktop} {
        margin-right: 300px;
    }
`

export const CompareContainer =styled.div`
    background-color: white;
    color: #6937F2;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
`

export const PurplePlus = styled.img`
    height: 1.5rem;
    width: 1.5rem;
    object-fit: cover;
    margin-left: 10px;
    margin-right: 5px;
  `

export const CompareKeywordText = styled.span`
    font-size: 14px;
    margin-right: 10px;
    
    @media ${media.desktop} {
        margin-right: 50px;
    }
    @media ${media.phone} {
        font-size: 12px;
    }
`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SaveSearchContainer = styled.div`
    display: flex;
    align-items: center;
`

export const HeartIcon = styled.img`
    height: 2rem;
    width: 2rem;
    object-fit: cover;
    margin-right: 5px;
  `

export const SaveSerchText = styled.span`
    font-size: 14px;
`

export const BarIcon = styled.img`
    height: 2rem;
    width: 1.5rem;
    object-fit: cover;
  `

export const DisabledContainer = styled.div`
    display: flex;
    align-items: center;
`
export const FolderIcon = styled.img`
    height: 2rem;
    width: 2rem;
    object-fit: cover;
    margin-right: 5px;
  `

export const DisabledText = styled.span`
color: #b8b8b8;
font-size: 14px;
`