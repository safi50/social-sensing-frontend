import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const CheckboxIcon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

// Hidden checkbox, but still be focusable
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
position: absolute;
opacity: 0;
cursor: pointer;
height: 100%;
width: 100%;
margin: 0;
padding: 0;
z-index: 1; // To ensure it's above the StyledCheckbox
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid gray;
  background: ${(props) => (props.checked ? '#6937F2' : 'white')};
  border-radius: 3px;
  transition: all 150ms;
  ${CheckboxIcon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
  }
`;