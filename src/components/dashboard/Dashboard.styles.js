import styled from "styled-components";


const sizes = {
    desktop: '992px',
    tablet: '768px',
    phone: '576px',
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