import {
  ConfirmContainer,
  ConfirmWrapper,
  Title,
  SubTitle,
  ButtonWrapper,
  FooterText,
  ImagesContainer,
} from "./comfirm.styles";


// user verifies their email from this page
export const Confirm = () => {
  return (
    <ConfirmContainer>
      <ConfirmWrapper>
        <img
          src="https://app.walee.pk/assets/walee/logo/walee.png"
          alt="logo.png"
        />
        <Title>
          Confirm your email address to get started on Walee Social Listening
        </Title>
        <SubTitle>
          Once you’ve confirmed that{" "}
          <span style={{ color: "#6631F7" }}>johnsmith123@walee.pk</span> is
          your email address, we’ll help you find your favourite keywords.
        </SubTitle>
        <ButtonWrapper>Confirm Email Address</ButtonWrapper>
        <SubTitle>
          If you didn’t request this email, there’s nothing to worry about you
          can safely ignore it.
        </SubTitle>
      </ConfirmWrapper>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <FooterText>
          Made by <span style={{ fontWeight: "600" }}>Walee Pakistan</span>
        </FooterText>
        <ImagesContainer>
          <img src="fb.svg" alt="fb.svg" />
          <img src="youtube.svg" alt="linkedin.svg" />
          <img src="twitter.svg" alt="twitter.svg" />
          <img src="insta.svg" alt="insta.svg" />
          <img src="p-logo.svg" alt="linkedin.svg" />
        </ImagesContainer>
        <FooterText>All rights reserved © 2020 Walee Pakistan</FooterText>
        <FooterText>www.walee.com.pk</FooterText>
      </div>
    </ConfirmContainer>
  );
};
