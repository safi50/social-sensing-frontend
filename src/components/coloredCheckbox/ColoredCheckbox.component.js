import React from "react";
import {CheckboxContainer, HiddenCheckbox, StyledCheckbox, CheckboxIcon} from './ColoredCheckbox.styles'

// custome checkbox with purple background and white tick
const ColoredCheckbox = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <CheckboxIcon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </CheckboxIcon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
  
  export default ColoredCheckbox;