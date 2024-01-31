import styled from "styled-components";
import { StyledNumberBox } from "../worldwideDropdown/worldwideDropdown.styles";
import { ApplyBtn } from "../filters/Filters.styles";

const sizes = {
  desktop: "992px",
  tablet: "768px",
  phone: "630px",
};

const media = {
  desktop: `(min-width: ${sizes.desktop})`,
  tablet: `(min-width: ${sizes.tablet})`,
  phone: `(max-width: ${sizes.phone})`,
};

export const DashboardContainer = styled.div`
  background-color: #f4f4f4;
`;

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
  font-weight: 500;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RefreshButton = styled.button`
  background-color: transparent;
  border: 1px solid #6937f2;
  border-radius: 5px;
  padding: 3px 3px 0px 3px;
  cursor: pointer;
`;

export const RefreshIcon = styled.img`
  height: 2rem;
  width: 2rem;
  object-fit: cover;
`;

export const DownloadButton = styled.button`
  background-color: #6937f2;
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
`;

export const DownloadIcon = styled.img`
  height: 2rem;
  width: 2rem;
  object-fit: cover;
  margin-right: 5px;
`;

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
`;

export const HashtagContainer = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 270px;
  border: 1px solid transparent; // Add a transparent border

  &:hover {
    border-color: #6937f2; // Change border color on hover

    .icon-container {
      display: flex; // Show the icon container on hover
    }
  }
`;

export const PurpleCircle = styled.img`
  height: 1rem;
  width: 1rem;
  object-fit: cover;
`;

export const BackIcon = styled.img`
  height: 3rem;
  width: 3rem;
  object-fit: cover;
`;

export const BackContainer = styled.div`
  display: flex;
  align-content: center;
  padding: 10px 10px 10px 25px
`

export const BackText = styled.span`
  font-size: 20px;
  color: #6937f2
`

export const HashtagText = styled.span`
  font-size: 14px;
  padding-left: 10px;
  margin-right: 10px;

  // @media ${media.desktop} {
  //   margin-right: 300px;
  // }
`;

export const IconContainer = styled.div`
  display: none; // Initially hide the icon container
  align-items: center;
`;

export const CompareContainer = styled.div`
  background-color: white;
  color: #6937f2;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  @media ${media.phone} {
    padding-left: 5px;
  }
`;

export const CompareKeywordInput = styled.input`
  width: 200px;
  height: 40px;
  font-size: 14px;
  padding: 10px
`;

export const PurplePlus = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  object-fit: cover;
  margin-left: 10px;
  margin-right: 5px;
`;

export const CompareKeywordText = styled.span`
  font-size: 14px;
  margin-right: 10px;

  @media ${media.desktop} {
    margin-right: 50px;
  }
  @media ${media.phone} {
    font-size: 12px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-grow: 1;
  flex-wrap: wrap;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SaveSearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeartIcon = styled.img`
  height: 2rem;
  width: 2rem;
  object-fit: cover;
  margin-right: 5px;
`;

export const SaveSerchText = styled.span`
  font-size: 14px;
`;

export const BarIcon = styled.img`
  height: 37px;
  width: 1px;
  object-fit: cover;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
`;

export const DisabledContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const FolderIcon = styled.img`
  height: 2rem;
  width: 2rem;
  object-fit: cover;
  margin-right: 5px;
`;

export const DisabledText = styled.span`
  color: #b8b8b8;
  font-size: 14px;
`;

export const SelectionContainer = styled.div`
  padding: 5px 15px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 30px;

  @media ${media.phone} {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const FilterItemsRow = styled.div`
  display: flex;
  flex-wrap: wrap; // Allows items to wrap onto the next line if needed
  gap: 10px; // Keeps space between items
  align-items: center;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SelectionHeading = styled.span`
  opacity: 0.7;
  font-size: 12px;
`;

export const FilterItem = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  gap: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 5px 2px 5px 10px;
  font-size: 12px;
`;

export const MoreItem = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  gap: 2px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 7px 10px 7px 0px;
  font-size: 12px;
  color: #6937f2;
`;

export const CountBox = styled(StyledNumberBox)`
  width: 35px;
  height: 25px;
  border-radius: 20px;
`;

export const DurationBtn = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.2);
  background-color: transparent;
  padding: 8px;
  cursor: pointer;
`;

export const DurationBtnSelected = styled(DurationBtn)`
  color: white;
  background-color: #6937f2;
`;

export const DateItemRow = styled(FilterItemsRow)`
  gap: 3px;
`;

// Styled container for the input and icon
export const DateInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.2); // Adjust the color as needed
  border-radius: 10px; // Adjust for rounded corners
  padding: 5px 10px; // Adjust the padding as needed
  font-size: 14px; // Adjust the font size as needed
`;

// Styled input for the date
export const DateInput = styled.input.attrs({
  type: "date",
  placeholder: "dd mm yyyy",
})`
  opacity: 0.2;
  border: none;
  outline: none;
  flex-grow: 1;
  font-size: 14px;
  padding: 2px;
  border-radius: 10px;
  cursor: pointer;

  // Styles to remove the default date picker styling
  // &::-webkit-calendar-picker-indicator {
  //   display: none;
  // }
`;

export const CrossIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  object-fit: cover;
  opacity: 0.2;
`;

export const CrossBtn = styled(DurationBtn)`
  padding: 8px 8px 5px 8px;
`;
export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 30px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

export const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-content: space-between;
`;


export const EditIcon = styled.img.attrs({
  src: "/edit.svg"
})`
margin-right: 5px;
width: 15px;
height: 15px;
`

export const DeleteIcon = styled.img.attrs({
  src: "/trash-2.svg"
})`
width: 15px;
height: 15px;
`

export const FilterCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-left: 5px;
  label {
    margin-left: 5px;
  }
`;

export const CheckBoxLabel = styled.label`
  font-size: 12px
`

export const FilterItemContainer = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
`;

export const FilterItemDropdown = styled.div`
position: absolute;
  top: 100%; // Position the dropdown right below the filter item
  left: 0;
  z-index: 10; // Ensure it's above other items
  background: white; // Or any other background
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); // Shadow as border
  border-radius: 5px;
  width: 100%;
  padding: 10px 5px;
`

export const ApplyBtnMedium = styled(DownloadButton)`
width: 50%;
height: 30px;
maxWidth: 200px
`

export const SentimentFilterFooterContainer = styled.div`
display: flex;
padding-top: 10px;
justify-content: right;
`