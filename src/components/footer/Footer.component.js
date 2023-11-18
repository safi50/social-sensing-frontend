import React from "react";
import {FooterContainer, 
    TextMuted,
    PoweredBy,
    Logo,
} from './Footer.styles';

const Footer = () =>{

    return (
        <FooterContainer>
      <TextMuted>&copy;2021 Walee Technologies. All rights reserved</TextMuted>
      <PoweredBy>
        Powered by
        <a href="https://www.walee.pk" target="_blank" rel="noopener noreferrer">
          <Logo src={"https://app.walee.pk/assets/walee/logo/walee-white.png"} alt="Walee logo" />
        </a>
      </PoweredBy>
    </FooterContainer>
    )
}

export default Footer